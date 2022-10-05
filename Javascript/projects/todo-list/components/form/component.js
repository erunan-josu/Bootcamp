import './style.css'

export const formComponent = (element) => {
  const form = `
    <form id='form' class='form'>
        <h3>Add a new task</h3>
        <div class='input-container'>
            <label for='task-name'>Task name</label>
            <input type='text' id='task-name'>
        </div>
        <div class='input-container'>
            <label for='task-date'>Due date</label>
            <input type='date' id='task-date'>
        </div>
        <button class='add-task-btn' type='submit'>Add new task</button>
    </form>
    `
  element.innerHTML += form

  const submitBtn = document.querySelector('.add-task-btn')
  const formElement = document.querySelector('#form')

  formElement.addEventListener('change', (event) => {
    preventDefault()
    console.log(event)
  })

  submitBtn.addEventListener('submit', (e) => {
    alert('hola')
  })
}
