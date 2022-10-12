import './style.css'
import deleteBtn from '/images/delete.png'
export const CartItem = ({ id, name, images, price }) => {
  return `
    <div class='cart-item'>
        <img class='cart-item-img' src='${images.front}' alt=''>
        <p class='cart-item-name'>${name}</p>
        <p class='cart-item-price'>${price} €</p>
        <img class='cart-del-btn' data-num='${id}' src='${deleteBtn}' alt='delete button'>
    </div>
    `
}

// hacer botonos de borrar items del carrito
