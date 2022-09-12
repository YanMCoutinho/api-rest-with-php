export function insertStatistics(measure, superapproved, approved, disapproved, total) {
    let table = document.querySelector('#class-notes table#students-statistics')
    table.appendChild(createStatisticRow(measure, superapproved, approved, disapproved, total))
}

function createStatisticRow(measure, superapproved, approved, disapproved, total) {
    let row = document.createElement('tr')
    let tdMeasure = document.createElement('td')
    tdMeasure.textContent = measure
    row.appendChild(tdMeasure)

    let tdSuperapproved = document.createElement('td')
    tdSuperapproved.textContent = superapproved
    tdSuperapproved.classList.add('super-approved')
    row.appendChild(tdSuperapproved)
    
    let tdApproved = document.createElement('td')
    tdApproved.textContent = approved
    tdApproved.classList.add('approved')
    row.appendChild(tdApproved)

    let tdDisapproved = document.createElement('td')
    tdDisapproved.textContent = disapproved
    tdDisapproved.classList.add('disapproved')
    row.appendChild(tdDisapproved)

    let tdTotal = document.createElement('td')
    tdTotal.textContent = total
    row.appendChild(tdTotal)

    return row;
}
