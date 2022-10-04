import './style.css'

export const colorPickerComponent = (element) => {
  const COLOR_PALETTE = {
    '#28262C': 'Raisin Black',
    '#998FC7': 'Blue Bell',
    '#D4C2FC': 'Lavender Blue',
    '#F9F5FF': 'Magnolia',
    '#14248A': 'Resolution Blue',
  }

  element.innerHTML = `
    <h2 id='color-name'> White - #fff  </h2>
        <select id='color-picker'>
            <option value='#fff'> - </option>
        </select>
    `
  const select = document.querySelector('#color-picker')

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option')
    option.value = color
    option.textContent = COLOR_PALETTE[color]
    select.appendChild(option)
  })

  select.addEventListener('change', (e) => {
    const colorName = document.querySelector('#color-name')
    const newColor = e.target.value
    document.body.style.backgroundColor = newColor
    colorName.innerText = `${COLOR_PALETTE[newColor]} - ${newColor}`
  })
}
