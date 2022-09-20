import { insertStudent } from "./student-functions.js"

const clickEventButtonList = {
    insertStudent:event => insertStudentButton(event),
    studentDetails:event => openStudentDetails(event)
}

export function addEventOnClickInButton(button) {
    if (clickEventButtonList[button.dataset.type]) {
        button.addEventListener('click', (event) => {
            clickEventButtonList[button.dataset.type](event)
        })
    }
}

function openStudentDetails(event) {
    var target = event.target.parentElement.parentElement //Linha do elemento

    let statsVideos = [
        '<iframe width="560" autoplay height="315" src="https://www.youtube.com/embed/B0GIT8hV6UI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" autoplay height="315" src="https://www.youtube.com/embed/1Mcdh2Vf2Xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" autoplay height="315" src="https://www.youtube.com/embed/2ShEs_6dbVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ]

    let statsClass = [
        'super-approved',
        'approved',
        'disapproved',
    ]

    sessionStorage.setItem('name', target.dataset.name)
    var count = 1
    let notes = (target.dataset.notes).split(',')
    notes.forEach(note => {
        sessionStorage.setItem(('note' + count), note)    
        count++
    })
    
    sessionStorage.setItem('average', target.dataset.average)
    sessionStorage.setItem('stats', statsVideos[target.dataset.stats])
    sessionStorage.setItem('class', statsClass[target.dataset.stats])

    window.location.href = "./details.html"
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