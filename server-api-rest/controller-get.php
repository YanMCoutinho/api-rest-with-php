<?php
    require './controller.php';

    $controller = new Controller();
    $message = $controller->listStudents();

    print_r($message);
?>
