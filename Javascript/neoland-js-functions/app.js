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
const numbers = [1, 2, 3, 5, 45, 37, 58]
function sumAll(param) {
  return param.reduce((prev, current) => prev + current)
}
console.log(sumAll(numbers))
