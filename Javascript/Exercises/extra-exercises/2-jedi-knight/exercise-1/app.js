// Jedi-Knight - Exercise 1

// Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por consola
// el array de categorías. Ten en cuenta que las categorías no deberían repetirse.

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura'],
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción'],
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller'],
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación'],
  },
]

const categoriesArray = []

for (let movie of movies) {
  const { categories } = movie

  categories.forEach((category) => {
    if (!categoriesArray.includes(category)) {
      categoriesArray.push(category)
    }
  })
}

console.log(categoriesArray)
