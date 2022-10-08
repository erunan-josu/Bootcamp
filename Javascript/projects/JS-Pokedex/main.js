import './style.css'
import { getData, getDataByName } from './services/api'
import { headerComponent } from './components/header/component'
import { searchbarComponent } from './components/searchbar/component'
import { mainComponent } from './components/mainElement/component'
import { addAllEvents } from './Events/addAllEvents'

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
  console.log(pokemon)
  return pokemon
}

// filter raw data to only useful data
const cleanData = (raw) => {
  const { id, name, order, sprites, types, stats, weight, height } = raw
  // get clean stats array of obj
  const statsArray = stats.map((item) => {
    return {
      stat: item.stat.name,
      effort: item.effort,
      base_stat: item.base_stat,
    }
  })
  // get clean types array
  const typesArray = types.map((item) => item.type.name)

  return {
    id,
    name,
    order,
    height: height / 10,
    weight: weight / 10,
    sprites: { front: sprites.front_default, shiny: sprites.front_shiny },
    stats: statsArray,
    types: typesArray,
  }
}

const init = async () => {
  document.querySelector('#app').innerHTML += headerComponent
  document.querySelector('#app').innerHTML += searchbarComponent
  document.querySelector('#app').innerHTML += mainComponent
  const data = await getAllNames()
  const pokemon = getPokemon(data, 'bulbasaur')
  console.log(pokemon)
  addAllEvents()
}
init()
