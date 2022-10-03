// Jedi-Knight - Exercise 5
// 5 - Crea una función llamada rollDice() que reciba como parametro el numero de
caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
 Como hemos dicho, que la función use el parametro para simular una tirada de dado
  y retornar el resultado. 
const rollDice = (max, min = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(rollDice(6))
console.log(rollDice(6))
console.log(rollDice(6))
console.log(rollDice(6))
