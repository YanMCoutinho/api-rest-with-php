export function insertStatistics(measure, superapproved, approved, disapproved, total) {
    let table = document.querySelector('#class-notes table#students-statistics')
    let row = createStatisticRow(measure, superapproved, approved, disapproved, total)
    
    row.children[1].classList.add('super-approved')
    row.children[2].classList.add('approved')
    row.children[3].classList.add('disapproved')
    table.appendChild(row)
}

export function insertNotesStatistics(measure, note1, note2, note3, total) {
    let table = document.querySelector('#class-notes table#students-notes-statistics')
    let row = createStatisticRow(measure, note1, note2, note3, total)
    table.appendChild(row)
}

function createStatisticRow(measure, data1, data2, data3, total) {
    let row = document.createElement('tr')
    let tdMeasure = document.createElement('td')
    tdMeasure.textContent = measure
    row.appendChild(tdMeasure)

    let tdData1 = document.createElement('td')
    tdData1.textContent = data1
    row.appendChild(tdData1)
    
    let tdData2 = document.createElement('td')
    tdData2.textContent = data2
    row.appendChild(tdData2)

    let tdData3 = document.createElement('td')
    tdData3.textContent = data3
    row.appendChild(tdData3)

    let tdTotal = document.createElement('td')
    tdTotal.textContent = total
    row.appendChild(tdTotal)

    return row;
}
