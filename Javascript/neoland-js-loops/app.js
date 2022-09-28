// Iteration 1
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta',
]

for (let i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {
    console.log(products[i])
  }
}

// Iteration 2
const alumns = [
  { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
  { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
  { name: 'Juan Miranda', T1: false, T2: true, T3: true },
  { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
  { name: 'Raquel Benito', T1: true, T2: true, T3: true },
]
function approveAlumns(arr) {
  for (let alumn of arr) {
    let counter = 0
    let trimesters = Object.keys(alumn).slice(1)

    for (let i = 0; i < trimesters.length; i++) {
      if (alumn[trimesters[i]]) {
        counter += 1
      }
    }
    counter >= 2 ? (alumn.isApproved = true) : (alumn.isApproved = false)
  }
}
approveAlumns(alumns)
console.log(alumns)

// Iteration 3
let placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar',
]
for (let place of placesToTravel) {
  console.log(place)
}

// Iteration 4
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg',
}

for (let data in alien) {
  console.log(alien[data])
}

// Iteration 5
placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' },
]

for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1)
  }
}

console.log(placesToTravel)

// Iteration 6
toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' },
]

const newArr = []

for (let [i, value] of toys.entries()) {
  if (!value.name.includes('gato')) {
    newArr.push(toys.slice(i, i + 1))
  }
}

console.log(newArr)
