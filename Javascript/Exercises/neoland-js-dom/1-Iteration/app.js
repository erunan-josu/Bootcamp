// Iteration 1
const showMeBtn = document.querySelector('.showme')
const pillado = document.querySelector('#pillado')
const paragraphsAll = document.querySelectorAll('p')
const pokemonAll = document.querySelectorAll('.pokemon')
const testMeAll = document.querySelectorAll('[data-function=testMe]')

console.log(showMeBtn)
console.log(pillado)
console.log(paragraphsAll.forEach((p) => console.log(p)))
console.log(pokemonAll.forEach((pokemn) => console.log(pokemn)))
console.log(testMeAll.forEach((element) => console.log(element)))
console.log(testMeAll[2])
