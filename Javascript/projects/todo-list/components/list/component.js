import './style.css'

export const listComponent = (element) => {
  const todoList = `
    <ul class='task-list'>
    <li class='item'>adfdasfasdfdsfdsafd</li>
    </ul>
    `

  element.innerHTML += todoList
  const li = document.querySelector('.item')
  console.log(li)

  li.addEventListener('click', (e) => {
    console.log(e)
  })
}
