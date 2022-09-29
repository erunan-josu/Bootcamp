// Iteration 3

// 3.1 Dado el siguiente array, crea una copia usando spread operators.
let pointsList = [32, 54, 21, 64, 75, 43]
const pointsListCopy = [...pointsList]
console.log(pointsListCopy)

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
let toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyCopy = { ...toy }
console.log(toyCopy)

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
pointsList = [32, 54, 21, 64, 75, 43]
const pointsList2 = [54, 87, 99, 65, 32]
const newPointsList = [...pointsList, ...pointsList2]
console.log(newPointsList)

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = {
  lights: 'rgb',
  power: ['Volar like a dragon', 'MoonWalk'],
}
const newToyObj = { ...toy, ...toyUpdate }
console.log(newToyObj)

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const colorsCopy = [...colors]
colorsCopy.splice(2, 1)
console.log(colors, colorsCopy)
