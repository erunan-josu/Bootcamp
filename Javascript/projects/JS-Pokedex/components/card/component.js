import './style.css'

export const pokemonCardComponent = (obj) => {
  const { order, name, height, weight, sprites } = obj
  return `
  <div class='data-container id='data-container'>
        <div class='pokmn-img-container'>
            <img class='pkmn-img' id='pkmn-img' src='${
              sprites.default
            }' alt='pokemon image'>
        </div>
            <div class='details'>
                <h1>#${order} - ${name}</h1>
                <div class='details-row'>
                  <p>Height: ${height / 10}m</p>
                  <p>Weigth: ${weight / 10}kg</p>
                </div>
            <div class='details-row'>
                <ul class='types' id='types'></ul>
            </div>
        </div>
    </div>
    `
}
