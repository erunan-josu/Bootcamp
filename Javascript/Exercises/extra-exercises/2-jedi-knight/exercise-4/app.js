// Jedi-Knight - Exercise 4

// 4-1 Crea una función llamada findArrayIndex que reciba como parametros un array
// de textos y un texto y devuelve la posición del array cuando el valor del array sea
// igual al valor del texto que enviaste como parametro.
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan',
]

const findArrayIndex = (array, text) => {
  return array.indexOf(text)
}

console.log(findArrayIndex(mainCharacters, 'Rey'))
console.log(findArrayIndex(mainCharacters, 'Obi-Wan'))
console.log(findArrayIndex(mainCharacters, 'Qui-Gon-Jinn'))

// 4-2 Usando la función anterior beneficiate de poder conocer el indice del array para
// crear una función llamada removeItem que pasandole un array y un texto como
// parametros (los mismos parametros que en el anterior ejercicio) llame a la función
//  anteriormente creada findArrayIndex y obten el indice para posteriormente usar la
//   función de javascript .splice() para eliminar el elemento del array.
// Finalmente retorna el array.
const removeItem = (array, text) => {
  const arrayCopy = [...array]
  const index = findArrayIndex(array, text)
  index >= 0 && arrayCopy.splice(index, 1)
  return arrayCopy
}

console.log(removeItem(mainCharacters, 'Rey'))
console.log(removeItem(mainCharacters, 'Obi-Wan'))
console.log(removeItem(mainCharacters, 'Qui-Gon-Jinn'))
