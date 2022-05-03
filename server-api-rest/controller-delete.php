<?php
    if ( isset($_GET['id']) ) {
        $id = $_GET['id'];

        if (is_numeric($id)) {
            require './controller.php';
            $controller = new Controller();
            $query = $controller->deleteStudent($id);
            
            if ($query) {
                header('Location: ../view/index.html');
            } else {
                echo 'Ocorreu um erro, tente novamente mais tarde!';
            }
        } else {
            header('Location: ../view/index.html');
        }

    } else {
        header('Location: ../view/index.html');
    }

    exit();
?>