// Iteration 1
const movies = [
  { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
  { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
  {
    title: 'Solo en Whatsapp',
    duration: 223,
    categories: ['comedia', 'thriller'],
  },
  {
    title: 'El gato con guantes',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación'],
  },
]
const movieGenres = []
for (let movie of movies) {
  const { categories } = movie
  for (let category of categories) {
    !movieGenres.includes(category) && movieGenres.push(category)
  }
}
console.log(movieGenres)

// Iteration 2
let users = [
  {
    name: 'Manolo el del bombo',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 },
    },
  },
  {
    name: 'Mortadelo',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 },
    },
  },
  {
    name: 'Super Lopez',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 },
    },
  },
  {
    name: 'El culebra',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 },
    },
  },
]

const getVolumeAverage = () => {
  let volumeAverage = 0
  let volumeArray = []
  for (let user of users) {
    const { favoritesSounds } = user
    for (let prop in favoritesSounds) {
      volumeArray.push(prop)
      volumeAverage += favoritesSounds[prop].volume
    }
  }
  console.log(volumeArray)
  return volumeAverage / volumeArray.length
}

console.log(`average of volume: ${getVolumeAverage()}`)

// Iteration 3
users = [
  {
    name: 'Manolo el del bombo',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 },
    },
  },
  {
    name: 'Mortadelo',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 },
    },
  },
  {
    name: 'Super Lopez',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 },
    },
  },
  {
    name: 'El culebra',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 },
    },
  },
]

const getCount = (arr) => {
  const soundsCounter = {}
  for (let item of arr) {
    const { favoritesSounds } = item
    for (let prop in favoritesSounds) {
      console.log(prop)
      soundsCounter.hasOwnProperty(prop)
        ? (soundsCounter[prop] += 1)
        : (soundsCounter[prop] = 1)
    }
  }
  return soundsCounter
}

console.log(getCount(users))

// Iteration 4
const animalList = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
const onePieceCharacters = ['Luffy', 'Zoro', 'Robin', 'Sanji', 'Nami']
const consolesList = ['Pc', 'Play Station', 'Xbox', 'Switch']

const findArrayIndex = (array, text) => {
  return array.indexOf(text)
}

console.log(findArrayIndex(animalList, 'Salamandra'))
console.log(findArrayIndex(onePieceCharacters, 'Zoro'))
console.log(findArrayIndex(consolesList, 'Switch'))

// Iteration 5
const rollDice = (max, min = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(rollDice(4))
console.log(rollDice(4))
console.log(rollDice(4))
console.log('num >= 2', rollDice(4, 2))

// Iteration 6
const players = [
  'Mesirve',
  'Cristiano Romualdo',
  'Fernando Muralla',
  'Ronalguiño',
]

const swap = (array, index1, index2) => {
  if (index1 > array.length - 1 || index2 > array.length - 1) return
  const newArray = [...array]
  const firstItem = newArray[index1]
  const secondItem = newArray[index2]
  newArray.splice(index1, 1, secondItem)
  newArray.splice(index2, 1, firstItem)
  return newArray
}
console.log(swap(players, 3, 0))
