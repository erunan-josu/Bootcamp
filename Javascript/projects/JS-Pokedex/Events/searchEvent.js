import { getAllNames } from '../main'
import { getPokemon } from '../main'
import { printPkmnCard } from '../main'

export const searchEvent = () => {
  const searchBtn = document.querySelector('#search-btn')
  const pokedexItems = document.querySelectorAll('.pokedex-item')
  searchBtn.addEventListener('click', () => {
    const searchbar = document.querySelector('#searchbar')
    search(searchbar.value)
  })
  pokedexItems.forEach((item) => {
    item.addEventListener('click', async (e) => {
      const pkmnName = await e.target.children[0].children[0].textContent
      search(pkmnName)
    })
  })
}

const search = async (name) => {
  if (name.length <= 0) return
  const data = await getAllNames()
  const pokemon = await getPokemon(data, name)
  document.querySelector('#pkmn-card').remove()
  printPkmnCard(pokemon)
}
