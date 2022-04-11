import { insertStudent } from "./student-functions.js";

export async function loadStudentsData() {
    const res = await fetch("../server-api-rest/controler-get.php")
        .then((data) => data.json())
    
    if (res.message) {
        window.alert(res.message)
    } else {
        res.forEach(student => {
            insertStudent(student.name, [student.note1, student.note2, student.note3])            
        });
    }
}