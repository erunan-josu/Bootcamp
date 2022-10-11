import './style.css'

export const CartItem = ({ name, images, price }) => {
  return `
    <div class='cart-item'>
        <img class='cart-item-img' src='${images.front}' alt=''>
        <p class='cart-item-name'>${name}</p>
        <p class='cart-item-price'>${price} €</p>
    </div>
    `
}
