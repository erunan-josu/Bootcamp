import './style.css'

export const headerComponent = (element) => {
  element.innerHTML += `
  <header id='header' class='header'>
    <div class='logo'>
        <p><span>✔️</span>lifetracker</p>
    </div>
  </header>
    `
}
