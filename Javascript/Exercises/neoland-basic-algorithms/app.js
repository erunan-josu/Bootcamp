// Iteration 1
let myFavoriteHero = 'Hulk'
let x = 50
let h = 5
let y = 10
let z = h + y

// Iteration 2
const character = {
  name: 'Jack Sparrow',
  age: 10,
}
character.age = 25

const firstName = 'Jon'
const lastName = 'Snow'
const age = 24

console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)

const toy1 = {
  name: 'Buss myYear',
  price: 19,
}

const toy2 = {
  name: 'Rallo mcKing',
  price: 29,
}

console.log(toy1.price + toy2.price)

let globalBasePrice = 10000

const car1 = {
  name: 'BMW m&m',
  basePrice: 50000,
  finalPrice: 60000,
}
const car2 = {
  name: 'Chevrolet Corbina',
  basePrice: 70000,
  finalPrice: 80000,
}

globalBasePrice = 25000
car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice
console.log(car1.finalPrice, car2.finalPrice)

// Iteration 3
console.log(10 * 5)
console.log(10 / 2)
console.log(15 % 9)
const p = 10
const j = 5
const o = p + j
console.log(o)
const c = 10
const m = 5
const i = c * m
console.log(i)

// Iteration 4
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])
avengers[0] = 'IRON MAN'
console.log(avengers.length)

const newArray = ['Rick', 'Beth', 'Jerry']
newArray.push('Morty')
newArray.push('Summer')
console.log(newArray)

const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez',
]
rickAndMortyCharacters.splice(-1)
console.log(
  'first: ' + rickAndMortyCharacters[0],
  'last: ' + rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
)
const rickAndMortyCharactersTwo = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez',
]
rickAndMortyCharactersTwo.splice(1, 1)
console.log(rickAndMortyCharactersTwo)

// Iteration 5
const number1 = 10
const number2 = 20
const number3 = 2

if (number1 === 10) {
  console.log('number1 es estrictamente igual a 10')
}
if (number2 / number1 === 2) {
  console.log('number2 dividido entre number1 es igual a 2')
}
if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2')
}
if (number3 != number1) {
  console.log('number3 es distinto a number1')
}
if (number3 * 5 === number1) {
  console.log('number3 por 5 es igual a number1')
}
if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log(
    'number3 por 5 es igual a number1 y number1 por 2 es igual a number2'
  )
}
if (number2 / 2 === number1 || number1 / 5 === number3) {
  console.log(
    'number2 entre 2 es igual a number1 o number1 entre 5 es igual a number3'
  )
}

// Iteration 6
for (let i = 0; i < 10; i++) {
  console.log(i)
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

for (let i = 0; i < 10; i++) {
  if (i === 9) {
    console.log('Dormido')
  } else {
    console.log('Intentando dormir')
  }
}
