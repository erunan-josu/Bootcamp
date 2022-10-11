import './style.css'
import { linkPage } from './utils/linkPage'
import { Header } from './components/Header/Header'
import { shopPage } from './pages/shop/shopPage'
import { cartPage } from './pages/cart/cartPage'

localStorage.setItem('myCart', JSON.stringify([]))
const header = document.querySelector('#header')
header.innerHTML += Header()

shopPage()
linkPage('#shop', shopPage)
linkPage('#cart', cartPage)
