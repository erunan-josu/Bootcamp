// Iteration 1
const btnToClick = document.querySelector('#btnToClick')
const clickInput = document.querySelector('.click')
const focusInput = document.querySelector('.focus')
const valueInput = document.querySelector('.value')
btnToClick.addEventListener('click', () => console.log(clickInput.value))
focusInput.addEventListener('focus', (e) => console.log(e.target.value))
valueInput.addEventListener('input', (e) => console.log(e.target.value))
