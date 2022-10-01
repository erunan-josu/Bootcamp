// Iteration 1

// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
// console.log(). Para ello, es necesario que crees un .html y un .js.
fetch('https://api.agify.io?name=michael')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    return data
  })

// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io'

const getData = async (name) => {
  const response = await fetch(`${baseUrl}?name=${name}`)
  const data = await response.json()
  console.log(data)
  return data
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
  const inputValue = document.querySelector('input').value
  printData(inputValue)
})

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.
const list = document.createElement('ul')
document.body.appendChild(list)
const printData = async (text) => {
  const data = await getData(text)
  const { name, country } = data

  for (let countryInfo of country) {
    const { country_id, probability } = countryInfo
    const li = `
    <li class='list-item'>
      <p>El nombre ${name} tiene un ${probability} de ser de ${country_id}</p>
      <button class='delete-btn'>x</button>
    </li>`
    list.innerHTML += li
  }

  // 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
  // de los p que hayas insertado y que si el usuario hace click en este botón
  // eliminemos el parrafo asociado.
  const deleteBtn = document.querySelectorAll('.delete-btn')
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.remove()
    })
  })
  console.log(deleteBtn)
}

// Iteration 2

// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando
// async-await.

const runTimeOut = () => {
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve()
    }, 2000)
  })

  promise.then(() => {
    console.log('Time out!')
  })
}

runTimeOut()
