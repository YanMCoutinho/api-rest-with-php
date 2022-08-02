<?php
    class Student {
        public string $name = '';
        public float $note1 = 0;
        public float $note2 = 0;
        public float $note3 = 0;
        public float $average = 0;

        public function __construct(string $name, float $note1, float $note2, float $note3) {
            $this->name = $name;
            $this->note1 = $note1;
            $this->note2 = $note2;
            $this->note3 = $note3;
            $average = $this->calcAverage([$note1, $note2, $note3]);
            $this->average = $average;
        }

        public function __toString() {
            return json_encode(array(
                'name' => $this->name,
                'note1' => $this->note1,
                'note2' => $this->note2,
                'note3' => $this->note3,
                'average' => $this->average,
            ));
        }

        public function calcAverage(array $notes) {
            $counter = 0;
            $total = 0;
            foreach($notes as $key => $value) {
                $total = $total + $value;
                $counter++;
            }

            return ($total/$counter);
        }
    }
?>