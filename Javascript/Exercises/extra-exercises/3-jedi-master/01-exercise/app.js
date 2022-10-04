// Jedi-Master - exercise 1

// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el
// html que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist',
]
const title = document.createElement('h1')
title.textContent = 'Albums: '
document.body.appendChild(title)

const albumList = document.createElement('ul')
document.body.appendChild(albumList)

albums.forEach((album) => {
  albumList.innerHTML += `<li>${album}</li>`
})
console.log(albumList)
