import './style.css'

export const ShopItem = ({ id, name, price, images }) => {
  return `
    <figure class='shop-item'>
        <img src='${images.front}' alt='${name}'>
        <figcaption>
            <p>${name}</p>
            <p>${price.toLocaleString()} €</p>
            <button class='see-more-btn' data-number='${id}'>See more</button>
        </figcaption>
    </figure>
`
}
