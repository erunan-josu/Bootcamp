import { getAllNames } from '../main'
import { getPokemon } from '../main'

export const searchEvent = () => {
  const searchBtn = document.querySelector('#search-btn')

  searchBtn.addEventListener('click', search)
}

const search = async () => {
  const value = document.querySelector('#searchbar').value
  console.log(value)
  const data = await getAllNames()
  const pokemon = await getPokemon(data, value)
  console.log(pokemon)
}
