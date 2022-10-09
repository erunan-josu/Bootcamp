import './style.css'

export const pokemonCardComponent = (obj) => {
  console.log(obj)
  const { order, name, height, weight, sprites } = obj
  return `
  <div class='pkmn-card' id='pkmn-card'>
    <h1>#${order} - ${name}</h1>
        <div class='pkmn-img-container'>
            <img class='pkmn-img' id='pkmn-img' src='${sprites.front}' alt='pokemon image'>
        </div>
          <div class='details-row'>
            <ul class='types' id='types'></ul>
          </div>
          <div class='details-row'>
            <div class='details'>
              <p>Height: ${height}m</p>
              <p>Weigth: ${weight}kg</p>
            </div>
          </div>
          <div class='details-row stats-row'>
            <p>Stats:</p>
            <ul id='stats' class='stats'></ul>
          </div>
        </div>
    </div>
    `
}
