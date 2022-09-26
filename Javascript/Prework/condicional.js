let user = true

function isLogged(user) {
  if (user) {
    console.log('bienvenido ' + user)
  } else {
    console.log('Debes iniciar sesion')
  }
}

isLogged()
isLogged('pepe')
