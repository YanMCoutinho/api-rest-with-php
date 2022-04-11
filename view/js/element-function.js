import { insertStudent } from "./student-functions.js"

const clickEventButtonList = {
    insertStudent:event => insertStudentButton(event)
}

export function addEventOnClickInButton(button) {
    if (clickEventButtonList[button.dataset.type]) {
        button.addEventListener('click', (event) => {
            //event.preventDefault()
            clickEventButtonList[button.dataset.type](event)
        })
    }
}

function insertStudentButton() {
    const nameHtml = document.querySelector('#class-notes input.name')
    const notesHtml = document.querySelectorAll('#class-notes input.student-notes')
    let empty = false
    let lettersInNotes = false
    let name = nameHtml.value
    let notes = []

    if (name.trim() == null || name.trim() == '') {
        empty = true    
    } else {
        notesHtml.forEach(note => {
            if (note.value == null || note.value == '') {
                empty = true
            }

            if (isNaN(Number(note.value)) ) {
                lettersInNotes = true
            }

            notes.push(Number(note.value))
        })
    }

    if (!empty && !lettersInNotes) {
        insertStudent(name, notes)
    } else if (empty) {
        window.alert('Você precisa preencher todos os campos para continuar!')
    } else if (lettersInNotes) {
        window.alert('As notas devem ser compostas de apenas números!')
    }
}