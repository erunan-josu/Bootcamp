// Iteration 1

// Crea una arrow function que tenga dos parametros a y b y
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// por consola la suma de los dos parametros.

const sum = (a = 10, b = 5) => {
  return a + b
}

console.log(sum())
console.log(sum(5))
console.log(sum(20, 10))
