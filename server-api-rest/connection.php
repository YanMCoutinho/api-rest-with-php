<?php
    $connection = mysqli_connect("localhost", "root", "", "bd_school") or die (mysqli_error($connection));
    mysqli_set_charset($connection, 'utf8');
?>