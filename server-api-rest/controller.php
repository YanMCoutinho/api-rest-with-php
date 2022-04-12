
<?php
    require './student.php';

    class Controller {
        public function includeStudent(String $name, float $note1, float $note2, float $note3) {
            require "./connection.php";

            $strSQL = "INSERT INTO tb_student(student_name, student_note1, student_note2, student_note3) VALUES ('" . $name ."', " . $note1 . ", ". $note2 .", " . $note3 .")";
            $query = mysqli_query($connection, $strSQL);
            require "./disconnect.php";

            return $query;
        }

        public function editStudent(int $idStudent, float $note1, float $note2,float $note3) {
            require "./connection.php";

            $strSQL = "UPDATE tb_student SET student_name = ". $name .", student_note1 = ". $note1 .", student_note2 = ". $note2.", student_note3 = " . $note3 . " WHERE id_student = " . $idStudent;
            $query = mysqli_query($connection, $strSQL);
            require "./disconnect.php";

            return $query;
        }

        public function deleteStudent(int $idStudent) {
            require "./connection.php";

            $strSQL = "DELETE FROM tb_student WHERE id_student = ". $idStudent;
            $query = mysqli_query($connection, $strSQL);
            require "./disconnect.php";

            return $query;
        }

        public function listStudents() {
            $strSQL = "SELECT student_name, student_note1, student_note2, student_note3 FROM tb_student";
            $json = json_encode(["message" => "Não foi possível carregar as notas, tente novamente mais tarde"]);
            
            require "./connection.php";
            $query = mysqli_query($connection, $strSQL);
            require "./disconnect.php";

            if ($query) {       
                $students = [];
                while($column = mysqli_fetch_array($query) ) {
                    $students[] = new Student($column['student_name'], $column['student_note1'], $column['student_note2'], $column['student_note3']);
                }

                $json = json_encode($students);
            }
            
            return $json;
        }
    }
?>