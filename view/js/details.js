export function insertStudentDetails() {
    let body = document.querySelector('#details')
    let table = getStudentDetailsTable()
    body.appendChild(table)
}

function getStudentDetailsTable() {
    let classes = [
        'Nome: ',
        'Nota 1: ',
        'Nota 2: ',
        'Nota 3: ',
        'Média: ',
        'status🤑: ',
    ]

    let data = getStudentDetailsData()

    return createDetailsTable(classes, data)
}

function getStudentDetailsData() {
    let name = sessionStorage.getItem('name')
    let note1 = sessionStorage.getItem('note1')
    let note2 = sessionStorage.getItem('note2')
    let note3 = sessionStorage.getItem('note3')
    let average = sessionStorage.getItem('average')
    let stats = sessionStorage.getItem('stats')

    return [name, note1, note2, note3, average, stats]
}

export function createDetailsTable(classes, data) {
    var className = sessionStorage.getItem('class')
    
    let table = document.createElement('table')
    table.id = 'students-details'

    let caption = document.createElement('caption')
    caption.textContent = 'DETALHES DO ALUNO'
    table.appendChild(caption)


    for(let count = 0; count < (classes.length-1); count++ ) {
        let row = document.createElement('tr')

        let columnClass = document.createElement('td')
        columnClass.innerHTML = classes[count]
        row.appendChild(columnClass)
    
        let columnData = document.createElement('td')
        columnData.innerHTML = data[count]
        columnData.classList.add(className)
        row.appendChild(columnData)

        table.appendChild(row)
    }   
    let rowClass = document.createElement('tr')
    let columnClass = document.createElement('td')
    columnClass.colSpan = 2
    columnClass.innerHTML = classes[classes.length - 1]
    rowClass.appendChild(columnClass)
    table.appendChild(rowClass)

    let rowData = document.createElement('tr')
    let columnData = document.createElement('td')
    columnData.colSpan = 2
    columnData.innerHTML = data[data.length - 1]
    
    rowData.appendChild(columnData)
    table.appendChild(rowData)

    return table
}