// Iteration 4

// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' },
]
const namesArray = users.map((user) => user.name)
console.log(namesArray)

// 4.2 Devuelve una lista que contenga los valores de la propiedad .name
// y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const anacletoList = users.map((user) => {
  if (user.name.charAt(0) === 'A') {
    return (user.name = 'Anacleto')
  }
  return user.name
})

console.log(anacletoList)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' },
]

const citiesArray = cities.map((city) => {
  if (city.isVisited) {
    const { name } = city
    city.name += ' (Visitado)'
    return name
  }
  return city.name
})

console.log(cities, citiesArray)
