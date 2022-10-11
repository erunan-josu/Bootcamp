const baseUrl = 'http://localhost:3000/'

export const getData = async (param) => {
  try {
    const response = await fetch(`${baseUrl}${param}`)
    const dataJSON = await response.json()
    return dataJSON
  } catch (error) {
    console.log(error)
  }
}
