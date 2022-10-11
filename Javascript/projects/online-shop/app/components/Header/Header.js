import './style.css'
import logo from '/images/logo.png'
import cart from '/images/cart.png'
export const Header = () => {
  const cartItems = JSON.parse(localStorage.getItem('myCart')).length

  return `
<div class='logo-cont'>
    <img src='${logo}' alt='logo' id='logo'>
    <p>Laptops</p>
</div>
<nav>
    <ul>
        <li id='shop'>Shop</li>
        <li class='cart' id='cart'>
            <img class='cart-btn' src='${cart}' alt='cart'>
            <div class='cart-counter'>${cartItems}</div>
        </li>
    </ul>
</nav>
`
}
