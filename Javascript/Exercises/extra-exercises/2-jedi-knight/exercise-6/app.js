// Jedi-Knight - Exercise 6

// 6 - Crea una función llamada swap que reciba un array y dos parametros que sean indices
// del array. La función deberá intercambiar la posición de los valores de los indices
// que hayamos enviado como parametro. Retorna el array resultante.

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa',
]

const swap = (arr, firstIndex, secondIndex) => {
  if (firstIndex > arr.length - 1 || secondIndex > arr.length - 1) return
  const newArray = [...arr]
  const firstItem = newArray[firstIndex]
  newArray[firstIndex] = newArray[secondIndex]
  newArray[secondIndex] = firstItem
  return newArray
}
console.log(swap(fantasticFour, 0, 3))
console.log(swap(fantasticFour, 1, 2))
