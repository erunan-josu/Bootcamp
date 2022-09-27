// Iteration 1
function sum(a, b) {
  return Math.max(a, b)
}
console.log(sum(8, 3))

// Iteration 2
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.',
]
function findLongestWord(param) {
  let longest = ''
  param.map((word) => (word.length > longest.length ? (longest = word) : ''))
  return longest
}
console.log(findLongestWord(avengers))

// Iteration 3
let numbers = [1, 2, 3, 5, 45, 37, 58]
function sumAll(param) {
  return param.reduce((prev, current) => prev + current)
}
console.log(sumAll(numbers))

// Iteration 4
numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  return Math.floor(
    param.reduce((prev, current) => prev + current) / numbers.length
  )
}
console.log(average(numbers))
