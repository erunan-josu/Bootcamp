import './style.css'
import { cleanContainer } from '../../utils/cleanContainer'
import { getRandomNum } from '../../utils/getRandomNum'
import { getData } from '../../services/services'
import { Card } from '../../components/Card/Card'
import { ShopItem } from '../../components/ShopItem/ShopItem'
import { updateCounter } from '../../utils/updateCounter'
let itemList = []
export let cartList = []
export const shopPage = async () => {
  const app = document.querySelector('#app')
  cleanContainer(app)
  const data = await getData('laptops')
  itemList = data

  const main = document.createElement('main')
  const cardSection = document.createElement('section')
  const listSection = document.createElement('section')
  cardSection.classList.add('card-section')
  listSection.classList.add('shop-list-section')
  app.appendChild(main)
  main.appendChild(cardSection)
  main.appendChild(listSection)

  printCardSection(itemList)
  printShopItems(itemList)

  seeMoreEvent()
}

const printCardSection = (list) => {
  const randomNum = getRandomNum(0, list.length)
  printCard(list[randomNum])
}

const getItem = (array, i) => {
  return array.filter((item) => item.id === i)[0]
}

const printCard = (item) => {
  const cardSection = document.querySelector('.card-section')
  cardSection.innerHTML += Card(item)

  const addBtn = document.querySelector('.add-btn')

  addBtn.addEventListener('click', () => {
    const localItems = JSON.parse(localStorage.getItem('myCart'))
    localItems.push(item)
    localStorage.setItem('myCart', JSON.stringify(localItems))
    updateCounter()
  })
}

const printShopItems = (list) => {
  const section = document.querySelector('.shop-list-section')
  for (const item of list) {
    section.innerHTML += ShopItem(item)
  }
}

const seeMoreEvent = () => {
  const node = document.querySelectorAll('.see-more-btn')

  for (let btn of node) {
    btn.addEventListener('click', (e) => {
      const itemIndex = Number(e.target.dataset.number)
      const myItem = getItem(itemList, itemIndex)
      cleanContainer(document.querySelector('.card-section'))
      printCard(myItem)
    })
  }
}
