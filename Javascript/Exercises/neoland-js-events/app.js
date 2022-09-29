// Iteration 1

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
const btnToClick = document.querySelector('#btnToClick')
const clickInput = document.querySelector('.click')
btnToClick.addEventListener('click', () => console.log(clickInput.value))

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector('.focus')
focusInput.addEventListener('focus', (e) => console.log(e.target.value))

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valueInput = document.querySelector('.value')
valueInput.addEventListener('input', (e) => console.log(e.target.value))
