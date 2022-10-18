import { insertNotesStatistics, insertStatistics } from "./statistics.js";
import { insertStudent } from "./student-functions.js";


export async function loadStudentsData() {
    const res = await fetch("../server-api-rest/controller-get.php")
        .then((data) => data.json())
    
    if (res.message) {
        window.alert(res.message)
    } else {
        var url = new URL(window.location.href);
        var order = url.searchParams.get("orderby");
        var type = url.searchParams.get("ordertype");
        if (res[1][order]) {
            document.querySelector('form.list-form .orderby').value = order
            document.querySelector('form.list-form .ordertype').value = type
            res.sort((a,b) => {
                let x = a[order]
                let y = b[order]
                if (isNaN(a[order])) {
                    x = x.toUpperCase()
                    y = y.toUpperCase()
                }
                
                if ("desc" == type) {
                    return (x == y ? 0 : x < y ? 1 : -1);    
                } 
                
                return (x == y ? 0 : x > y ? 1 : -1);
            })
        }
        
        let stats = [0, 0, 0] 
        let notes = [0, 0, 0]

        res.forEach(student => {
            insertStudent(student.name, student.average, [student.note1, student.note2, student.note3], student.stats)
            stats[student.stats] = stats[student.stats] + 1
            notes[0] += student.note1 
            notes[1] += student.note2 
            notes[2] += student.note3 
        })
        let total = (stats[0] + stats[1] + stats[2])
        let superapprovedPercentage = (((stats[0] / total) * 100).toFixed(2) + '%')
        let approvedPercentage = (((stats[1] / total) * 100).toFixed(2) + '%')
        let disapprovedPercentage = (((stats[2] / total) * 100).toFixed(2) + '%')
        let totalNotes = (( (notes[0]/total) + (notes[1]/total) + (notes[2]/total) )/ 3).toFixed(2)

        insertStatistics("Nominal", stats[0], stats[1], stats[2], total)
        insertStatistics("Percentual", superapprovedPercentage , approvedPercentage, disapprovedPercentage, ((total/total) * 100) + '%')
        insertNotesStatistics('Média', (notes[0]/total).toFixed(2), (notes[1]/total).toFixed(2), (notes[2]/total).toFixed(2), totalNotes)
    }
}