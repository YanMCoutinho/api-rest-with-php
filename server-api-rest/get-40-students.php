<?php
    require "./student.php";
    $students = [];
    for($cont = 0; $cont < 39; $cont++) {
        $student = new Student('string $name', 9, 6.06, '7.92');        
        $students[$cont] = clone $student;
    }

    echo json_encode($students);
?>