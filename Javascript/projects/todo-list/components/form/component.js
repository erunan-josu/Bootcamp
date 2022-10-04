import './style.css'

export const formComponent = (element) => {
  const form = `
    <form class='form'>
        <h3>Add a new task</h3>
        <div class='input-container'>
            <label for='task-name' required>Task name</label>
            <input type='text' id='task-name'>
        </div>
        <div class='input-container'>
            <label for='task-date'>Due date</label>
            <input type='date' id='task-date' required>
        </div>
        <button type='submit'>Add new task</button>
    </form>
    `
  element.innerHTML += form
}
