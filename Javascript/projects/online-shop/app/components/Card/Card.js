import './style.css'
export const Card = ({
  name,
  core,
  core_model,
  images,
  ram,
  storage,
  graphycs,
  weight,
  price,
  screen,
}) => {
  return `
<fieldset class='laptop-card'>
    <legend>${name}</legend>
    <img src='${images.front}' alt='${name}'>
    <div class='details-card'>
        <h2>Laptop Details</h2>
        <div class='details-list'>
          <p>${name}</p>
          <p>${core} ${core_model}</p>
          <p>${graphycs}</p>
          <p>${ram}GB RAM memory</p>
          <p>${storage}</p>
          <p>${screen} "</p>
          <p>${weight} Kg</p>
          <p>${price} €</p>
        </div>
        <button class='add-btn'>Add item</button>
    </div>
</fieldset>
`
}
