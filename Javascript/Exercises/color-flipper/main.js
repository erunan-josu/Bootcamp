import './style.css'
import { heroComponent } from './components/hero/component'
import { colorPickerComponent } from './components/color-picker/component'

heroComponent(document.querySelector('.hero'))
colorPickerComponent(document.querySelector('.color-picker-wrapper'))
