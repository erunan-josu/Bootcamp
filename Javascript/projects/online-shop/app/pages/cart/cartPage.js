import './style.css'
import { cleanContainer } from '../../utils/cleanContainer'
import { CartItem } from '../../components/CartItem/CartItem'
export const cartPage = () => {
  const main = document.querySelector('main')
  cleanContainer(main)
  const cartItems = JSON.parse(localStorage.getItem('myCart'))

  const totalPrice = cartItems.map((item) => item.price).reduce((a, b) => a + b)
  console.log(totalPrice)

  main.innerHTML += `
  <fieldset class='shopping-box'>
    <legend>Shopping box</legend>
    <div class='list-container'></div>
    <div class='total-container'>
      <p>Total price: ${totalPrice} €</span></p>
      <button class='buy-btn'>Buy</button>
    </div>
  </fieldset>
  `
  printItem(cartItems)
}

const printItem = (array) => {
  if (array.length > 0) {
    const cartList = document.querySelector('.list-container')
    array.forEach((item) => {
      cartList.innerHTML += CartItem(item)
    })
  }
}
