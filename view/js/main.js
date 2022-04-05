import { setAverage, checkApproval } from './student-functions.js'
import { addEventOnClickInButton } from './element-function.js'

window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    const tableRows = document.querySelectorAll('#class-notes table tr');
    let counter = 1;
    tableRows.forEach(row => {
        if (counter === 1) { //this is to avoid a table title change
            counter++;
        } else {
            setAverage(row) 
            checkApproval(row)
        }
    })

    const buttons = document.querySelectorAll('button#button-insert-student')
    buttons.forEach(button => {
            addEventOnClickInButton(button)
        })
})