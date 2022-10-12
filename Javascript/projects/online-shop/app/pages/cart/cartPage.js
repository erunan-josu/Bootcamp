import './style.css'
import { cleanContainer } from '../../utils/cleanContainer'
import { ShoppingBox } from '../../components/ShoppingBox/ShoppingBox'
import { CartItem } from '../../components/CartItem/CartItem'
import { updateCounter } from '../../utils/updateCounter'

export const cartPage = () => {
  const main = document.querySelector('main')
  cleanContainer(main)
  ShoppingBox()

  const cartItems = JSON.parse(localStorage.getItem('myCart'))

  if (cartItems.length <= 0) {
    showMsg('Your box is empty')
  } else {
    const totalPrice = cartItems
      .map((item) => item.price)
      .reduce((a, b) => a + b)

    const span = document.querySelector('.total-price')
    span.textContent = totalPrice

    printItem(cartItems)
    deleteItem()
    buyEvent()
  }
}

const printItem = (array) => {
  if (array.length > 0) {
    const cartList = document.querySelector('.list-container')
    array.forEach((item) => {
      cartList.innerHTML += CartItem(item)
    })
  }
}

const deleteItem = () => {
  const deleteBtnsNode = document.querySelectorAll('.cart-del-btn')
  deleteBtnsNode.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const itemID = e.target.dataset.num
      const storageItems = JSON.parse(localStorage.getItem('myCart'))

      let index
      for (let [key, value] of storageItems.entries()) {
        if (value.id == itemID) {
          index = key
        }
      }
      storageItems.splice(index, 1)
      localStorage.setItem('myCart', JSON.stringify(storageItems))

      updateCounter()

      cartPage()
    })
  })
}

const showMsg = (text) => {
  const listContainer = document.querySelector('.list-container')
  listContainer.innerHTML += `<p>${text}</p>`
  const totalContainer = document.querySelector('.total-container')
  totalContainer.style.display = 'none'
}

const buyEvent = () => {
  const buyBtn = document.querySelector('.buy-btn')
  buyBtn.addEventListener('click', (e) => {
    localStorage.setItem('myCart', '[]')
    cleanContainer(document.querySelector('main'))
    ShoppingBox()
    showMsg('You purchase will arrive soon :) Thanks!')
    updateCounter()
  })
}
