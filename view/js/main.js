import { insertStudentDetails } from './details.js'
import { loadStudentsData } from './get-student-data.js'

window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()

    let functions = {
        getNotes:_ => loadStudentsData(),
        getStudentData:_ => insertStudentDetails(),
    }
    let requirements = {
        getNotes: document.querySelector('#class-notes table#students-notes'),
        getStudentData: document.querySelector('#details')
    }
    Object.keys(requirements).forEach(requirement => {
        if (requirements[requirement] != null) {
            functions[requirement]('_')
        }
    });
})