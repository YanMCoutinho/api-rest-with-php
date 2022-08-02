/**export function insertStudent() {

}*/

export function insertStudent(name, notes) {
    let table = document.querySelector('#class-notes table#students-notes')

    table.appendChild(createStudentRow(name, notes))
}

export function setAverage(row) {
    let total = 0;
    for(let position = 1; position <= (row.children.length - 2); position++) {
        total = Number(total) + Number(row.children[position].textContent)
    }
    
    let average = total / (row.children.length - 2)
    row.children[(row.children.length - 1)].textContent = average.toFixed(2)
}

export function checkApproval(row) {
    let average = row.children[(row.children.length - 1)].textContent
    if (average > 9) {
        row.classList.add('super-approved')
    } else if (average > 6) {
        row.classList.add('approved')
    } else {
        row.classList.add('disapproved')
    }
}

export function checkStats(row) {
    let average = row.children[(row.children.length - 2)].textContent
    let status = row.children[(row.children.length - 1)]
    if (average > 9) {
        status.innerHTML = '💛'
    } else if (average > 6) {
        status.innerHTML = '💚'
    } else {
        status.innerHTML = '💔'
    }
}

export function createStudentRow(name, notes) {
    let row = document.createElement('tr')
    let tdName = document.createElement('td')
    tdName.innerHTML = name
    row.appendChild(tdName)

    notes.forEach(note => {
        var tdNote = document.createElement('td')
        tdNote.textContent = note

        row.appendChild(tdNote)
    });

    let tdAverage = document.createElement('td')
    row.appendChild(tdAverage)
    setAverage(row)
    checkApproval(row)
    
    let tdStatus = document.createElement('td')
    row.appendChild(tdStatus)
    checkStats(row)

    return row;
}