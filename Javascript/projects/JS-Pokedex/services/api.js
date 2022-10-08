const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const pkmnLimitUrl = '?offset=0&limit=151'

export const getData = async () => {
  try {
    const response = await fetch(`${baseUrl}${pkmnLimitUrl}`)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}

export const getDataByName = async (name) => {
  const response = await fetch(`${baseUrl}${name}`)
  const data = await response.json()
  console.log(data)
  return data
}
