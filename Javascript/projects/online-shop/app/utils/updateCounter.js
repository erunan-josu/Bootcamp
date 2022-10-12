export const updateCounter = () => {
  const storageItems = JSON.parse(localStorage.getItem('myCart'))
  const cartCounter = document.querySelector('.cart-counter')
  cartCounter.textContent = storageItems.length
}
