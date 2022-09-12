import { insertStatistics } from "./statistics.js";
import { insertStudent } from "./student-functions.js";


export async function loadStudentsData() {
    const res = await fetch("../server-api-rest/controller-get.php")
        .then((data) => data.json())
    
    if (res.message) {
        window.alert(res.message)
    } else {
        let stats = [0, 0, 0] 
        res.forEach(student => {
            insertStudent(student.name, student.average, [student.note1, student.note2, student.note3], student.stats)
            stats[student.stats] = stats[student.stats] + 1
        });
        insertStatistics("Nominal", stats[0], stats[1], stats[2], (stats[0] + stats[1] + stats[2]))
    }
}