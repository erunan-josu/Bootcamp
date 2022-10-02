const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true },
]
const veganSchedule = [...foodSchedule]

for (let food of foodSchedule) {
  const { isVegan } = food
  if (!isVegan) {
    const foodNames = veganSchedule.map((item) => item.name)
    const noMatchedFruits = fruits.filter(
      (fruit) => foodNames.indexOf(fruit) === -1
    )
    food.name = noMatchedFruits[0]
    food.isVegan = true
  }
}

console.log(veganSchedule)
