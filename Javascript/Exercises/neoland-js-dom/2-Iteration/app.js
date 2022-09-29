// Iteration 2

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const emptyDiv = document.createElement('div')
document.body.appendChild(emptyDiv)

emptyDiv.textContent = 'dlksafjladsk'
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv = document.createElement('div')
const paragraph = document.createElement('p')
newDiv.appendChild(paragraph)
document.body.appendChild(newDiv)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divWithParagraphs = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const paragraph = document.createElement('p')
  paragraph.textContent = `Paragraph: ${i + 1}`
  divWithParagraphs.appendChild(paragraph)
}
document.body.appendChild(divWithParagraphs)

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const dinamicParagraph = document.createElement('p')
dinamicParagraph.innerText = 'Soy dinámico!!'
document.body.appendChild(dinamicParagraph)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const subtitle = document.querySelector('.fn-insert-here')
subtitle.innerText = 'Wubba Lubba dub dub'

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const appList = document.createElement('ul')
for (let app of apps) {
  const li = document.createElement('li')
  li.innerHTML = `${app}`
  appList.appendChild(li)
}
document.body.appendChild(appList)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeNode = document.querySelectorAll('.fn-remove-me')
removeNode.forEach((e) => e.remove())

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.
const newParagraph = document.createElement('p')
newParagraph.textContent = 'Voy en medio!!'
const allDivs = document.querySelectorAll('div')
const secondDiv = allDivs[1]
document.body.insertBefore(newParagraph, secondDiv)

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertDivs = document.querySelectorAll('div.fn-insert-here')
const dentroParagraph = `
<p>Voy dentro!</p>
`
insertDivs.forEach((element) => (element.innerHTML = dentroParagraph))
