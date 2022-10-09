import './style.css'
import { getData, getDataByName } from './services/api'
import { headerComponent } from './components/header/component'
import { searchbarComponent } from './components/searchbar/component'
import { mainComponent } from './components/mainElement/component'
import { pokemonCardComponent } from './components/card/component'
import { typeComponent } from './components/type/component'
import { statComponent } from './components/stat/component'
import { addAllEvents } from './Events/addAllEvents'
import { miniCardComponent } from './components/miniCard/component'

// get all names from generation 1
export const getAllNames = async () => {
  const data = await getData()
  return data.map((item) => item.name)
}

// get clean pokemon data
export const getPokemon = async (array, name) => {
  if (!array.includes(name)) return
  const rawData = await getDataByName(name)
  const pokemon = cleanData(rawData)
  return pokemon
}

// filter raw data to only useful data
const cleanData = (raw) => {
  const { id, name, sprites, types, stats, weight, height } = raw
  // get clean stats array of obj
  const statsArray = stats.map((item) => {
    return {
      name: item.stat.name,
      effort: item.effort,
      base_stat: item.base_stat,
    }
  })
  // get clean types array
  const typesArray = types.map((item) => item.type.name)

  return {
    id,
    name,
    height: height / 10,
    weight: weight / 10,
    sprites: { front: sprites.front_default, shiny: sprites.front_shiny },
    stats: statsArray,
    types: typesArray,
  }
}

// print pokemon details
export const printPkmnCard = (pokemon) => {
  const main = document.querySelector('#card-cont')
  main.innerHTML += pokemonCardComponent(pokemon)
  pokemon.types.forEach((type) => {
    document.querySelector('#types').innerHTML += typeComponent(type)
  })
  pokemon.stats.forEach((stat) => {
    document.querySelector('#stats').innerHTML += statComponent(stat)
  })
}

export const printPokedex = async () => {
  const data = await getAllNames()
  const newArr = []
  for (let item of data) {
    const pokemon = await getPokemon(data, item)
    newArr.push(pokemon)
  }
  const list = document.createElement('ul')
  list.classList.add('pokedex-list')
  document.querySelector('#main-cont').appendChild(list)

  newArr.forEach((poke) => {
    document.querySelector('.pokedex-list').innerHTML += miniCardComponent(poke)
  })
}

// initialize web app
const init = async () => {
  document.querySelector('#app').innerHTML += headerComponent
  document.querySelector('#app').innerHTML += searchbarComponent
  document.querySelector('#app').innerHTML += mainComponent
  const data = await getAllNames()
  const pokemon = await getPokemon(data, 'bulbasaur')
  printPkmnCard(pokemon)
  await printPokedex()
  addAllEvents()
}
init()
