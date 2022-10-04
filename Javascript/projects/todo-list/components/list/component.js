import './style.css'

export const listComponent = (element) => {
  const todoList = `
    <ul class='list'>
    </ul>
    `
  element.innerHTML += todoList
}
