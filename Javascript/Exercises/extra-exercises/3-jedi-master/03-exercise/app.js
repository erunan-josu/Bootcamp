// Jedi-Master - Exercise 3

// Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente
// una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const div = document.querySelector('[data-function=printHere]')
const title = document.createElement('h1')
title.textContent = 'Places:'
div.appendChild(title)

const placesList = document.createElement('ul')
places.forEach((place) => {
  const placeName = `<li>${place}</li>`
  placesList.innerHTML += placeName
})

div.appendChild(placesList)
