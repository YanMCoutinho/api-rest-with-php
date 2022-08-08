<?php
    $name = strval($_POST['name']);
    $note1 = $_POST['note1'];
    $note2 = $_POST['note2'];
    $note3 = $_POST['note3'];

    if (is_numeric($note1) && is_numeric($note2) && is_numeric($note3)) {
        require './controller.php';
        $controller = new Controller();
        $query = $controller->includeStudent($name, $note1, $note2, $note3);
        
        if ($query) {
            header('Location: ../view/index.html');
        } else {
            echo 'Ocorreu um erro, tente novamente mais tarde!';
        }
    } else {
        header('Location: ../view/index.html');
    }
    exit();
?>