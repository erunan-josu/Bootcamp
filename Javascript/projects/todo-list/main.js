import './style.css'
import { headerComponent } from './components/header/component'
import { mainComponent } from './components/main/component'
const app = document.querySelector('#app')

headerComponent(app)
mainComponent(app)
