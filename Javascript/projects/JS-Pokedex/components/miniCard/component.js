import './style.css'

export const miniCardComponent = (pokemon) => {
  const { id, name, sprites } = pokemon
  return `
    <li class='pokedex-item'>
        <p>#${id} - <span>${name}</span></p>
        <img src='${sprites.front}' alt='${name}'>
    </li>
    `
}
