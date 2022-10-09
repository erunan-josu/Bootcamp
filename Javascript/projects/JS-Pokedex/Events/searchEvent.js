import { getAllNames } from '../main'
import { getPokemon } from '../main'
import { printPkmnCard } from '../main'

export const searchEvent = () => {
  const searchBtn = document.querySelector('#search-btn')

  searchBtn.addEventListener('click', search)
}

const search = async () => {
  const searchbar = document.querySelector('#searchbar')

  const data = await getAllNames()
  const pokemon = await getPokemon(data, searchbar.value)
  document.querySelector('#pkmn-card').remove()
  printPkmnCard(pokemon)

  console.log(pokemon)
}
