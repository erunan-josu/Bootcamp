import './style.css'
import githubLogo from '../../images/github.png'
import linkedinLogo from '../../images/linkedin.png'

export const footerComponent = (element) => {
  element.innerHTML += `
    <footer id='footer' class='footer'>
        <div>
            <img src='${githubLogo}' alt='github logo'>
            <a href='https://github.com/erunan-josu/Bootcamp/tree/main/Javascript/projects/todo-list'>erunan-josu</a>
        </div>
        <div>
            <img src='${linkedinLogo}' alt='linkedin logo'>
            <a href='https://www.linkedin.com/in/josu-hernandez/'>Josu Hernandez</a>
        </div>
    </footer>
    `
}
