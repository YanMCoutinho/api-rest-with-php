export function insertStudent(name, average, notes, stats) {
    let table = document.querySelector('#class-notes table#students-notes')
    table.appendChild(createStudentRow(name, average.toFixed(2), notes, stats))
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

export function createStudentRow(name, average, notes, stats) {
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
    tdAverage.textContent = average
    row.appendChild(tdAverage)
    checkApproval(row)
    
    let tdStats = document.createElement('td')
    tdStats.innerHTML = checkStats(stats)
    row.appendChild(tdStats)
    //checkStats(row)

    return row;
}


export function checkStats(stats) {
    let statsList = ['💛', '💚', '💔']
    
    if (statsList[stats]) {
        return statsList[stats]
    } else {
        return 'ERROR'
    }
}


/*
export function setAverage(row) {
    let total = 0;
    for(let position = 1; position <= (row.children.length - 2); position++) {
        total = Number(total) + Number(row.children[position].textContent)
    }
    
    let average = total / (row.children.length - 2)
    row.children[(row.children.length - 1)].textContent = average.toFixed(2)
}
*/