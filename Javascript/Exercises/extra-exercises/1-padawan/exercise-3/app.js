// Padawan - Exercise 3

// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
// Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200
// y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
]

const shortMovies = []
const commonMovies = []
const longMovies = []

movies.forEach((movie) => {
  const { durationInMinutes } = movie
  if (durationInMinutes >= 200) {
    longMovies.push(movie)
  } else if (durationInMinutes >= 100) {
    commonMovies.push(movie)
  } else {
    shortMovies.push(movie)
  }
})

console.log(shortMovies)
console.log(commonMovies)
console.log(longMovies)
