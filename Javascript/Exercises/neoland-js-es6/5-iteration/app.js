// Iteracion 5

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const adults = ages.filter((age) => age > 18)
console.log(adults)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const oddAges = ages.filter((age) => age % 2 === 0)
console.log(oddAges)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
let streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' },
]
const lolStreamers = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(lolStreamers)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name.
streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' },
]
const streamersWithU = streamers.filter((streamer) =>
  streamer.name.includes('u')
)
console.log(streamersWithU)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.
const legendsStreamers = streamers.filter((streamer) => {
  return streamer.gameMorePlayed.includes('Legends')
})

for (let streamer of legendsStreamers) {
  if (streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
  }
}

console.log(legendsStreamers)

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const input = document.querySelector('[data-function=toFilterStreamers]')

const filterStreamers = (inputValue) => {
  if (inputValue.length <= 0) return

  const filteredList = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(inputValue)
  )

  for (let streamer of filteredList) {
    console.log(streamer.name)
  }
}

input.addEventListener('keyup', (e) => {
  filterStreamers(e.target.value)
})

// 5.7 En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const filterButton = document.querySelector('button')
filterButton.addEventListener('click', () => {
  const valueInput = document.querySelector('input').value
  filterStreamers(valueInput)
})
