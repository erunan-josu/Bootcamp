import './style.css'
import { formComponent } from '../form/component'
import { listComponent } from '../list/component'

export const mainComponent = (element) => {
  element.innerHTML += `
    <main id='main-container' class='main-container'></main>
    `
  const main = document.querySelector('.main-container')
  listComponent(main)
  formComponent(main)
}
