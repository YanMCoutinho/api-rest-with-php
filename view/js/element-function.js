import { insertStudent } from "./student-functions.js"

const clickEventButtonList = {
    insertStudent:event => insertStudentButton(event)
}

export function addEventOnClickInButton(button) {
    if (clickEventButtonList[button.dataset.type]) {
        button.addEventListener('click', (event) => {
            clickEventButtonList[button.dataset.type](event)
        })
    }
}

function insertStudentButton() {
    const nameHtml = document.querySelector('#class-notes input.name')
    let empty = false
    let notesHtml = document.querySelectorAll('#class-notes input.student-notes')
    let name = nameHtml.value

    if (name == null || name == '') {
        empty = true    
    } else {
        notesHtml.forEach(note => {
            if (note.value == null || note.value == '') {
                empty = true
            }
        })
    }

    if (!empty) {
        insertStudent()
    } else {
        window.alert('Você precisa preencher todos os campos para continuar!')
    }
}