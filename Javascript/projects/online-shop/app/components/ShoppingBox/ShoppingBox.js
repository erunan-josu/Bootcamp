import './style.css'

export const ShoppingBox = () => {
  const template = `
  <fieldset class='shopping-box'>
    <legend>Shopping box</legend>
    <div class='list-container'></div>
    <div class='total-container'>
      <p>Total price: <span class='total-price'></span> €</p>
      <button class='buy-btn'>Buy</button>
    </div>
  </fieldset>
  `

  document.querySelector('main').innerHTML += template
}
