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
const users = [
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
