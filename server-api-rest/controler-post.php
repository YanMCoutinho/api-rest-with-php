<?php
    $name = strval($_POST['name']);
    $note1 = $_POST['note1'];
    $note2 = $_POST['note2'];
    $note3 = $_POST['note3'];

    if (is_numeric($note1) && is_numeric($note2) && is_numeric($note3)) {
        require "./connection.php";

        $strSQL = "INSERT INTO tb_student(student_name, student_note1, student_note2, student_note3) VALUES ('" . $name ."', " . $note1 . ", ". $note2 .", " . $note3 .")";

        $query = mysqli_query($connection, $strSQL);

        if ($query) {       
            header('Location: ../view/index.html');
        } else {
            echo mysql_error($connection);
        }

        require "./disconnect.php";
        exit();
    } else {
        header('Location: ../view/index.html');
    }
    

?>