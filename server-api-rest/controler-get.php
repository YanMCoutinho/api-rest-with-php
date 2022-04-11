<?php
    require "./student.php";
    require "./connection.php";

    $strSQL = "SELECT student_name, student_note1, student_note2, student_note3 FROM tb_student";

    $query = mysqli_query($connection, $strSQL);

    if ($query) {       
        $students = [];
        while($column = mysqli_fetch_array($query) ) {
            $students[] = new student($column['student_name'], $column['student_note1'], $column['student_note2'], $column['student_note3']);
        }
        $json = json_encode($students);
        print_r($json);
    } else {
        print_r(json_encode(["message" => "Não foi possível carregar as notas, tente novamente mais tarde"]));
    }

    require "./disconnect.php";
?>