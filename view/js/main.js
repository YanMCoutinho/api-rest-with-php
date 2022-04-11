import { addEventOnClickInButton } from './element-function.js'
import { loadStudentsData } from './get-student-data.js'

window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()

    /**
    const buttons = document.querySelectorAll('button#button-insert-student')
    buttons.forEach(button => {
            addEventOnClickInButton(button)
        })
     */
    
    loadStudentsData()
})