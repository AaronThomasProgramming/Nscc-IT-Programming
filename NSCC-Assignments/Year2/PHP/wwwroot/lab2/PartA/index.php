<!--url http://localhost/lab2/PartA/index.php -->

<!--Step1-->
<?php
    function Part1Step1($TempNum, $TempString) {
        static $Counter;
        $Counter++;
        if ($Counter == 7)
            $TempNum = $TempString;

        if(!is_numeric($TempNum)) {
            echo "<h1>Error, not a numeric value</h1>";
        }
        else {
            echo "<h$Counter> Value: ".$Counter."  </h$Counter>";
        }

    }

    for ($x = 0; $x <= 6; $x++) {
        Part1Step1("1", "Seven");
    }
?>
<!--Step2-->
<?php
    function ByValue($str1) {
        $str1 .= "...blah";
        return $str1;
    }
    function ByReference(&$str) {
        $str .= "...Blah";
    }

    $str1 = "Hello, World";
    echo $str1."<br>";

//    echo ByValue("Hello ");
    $str = ByValue($str1);
    echo $str."<br>";


    ByReference($str);
    echo $str;
    echo "<br>";
//    $a = "<br>Hello";
//    $a .= " World!";
//    echo $a; // Outputs: Hello World!
?>
<!--Step3-->
<?php
    $age = 21;
    function GlobalAge() {
        global $age;
        echo "<h1>You are " . $age . " years old</h1>";
    }
    GlobalAge();
?>
<!--Step4-->
<?php
//$age = 21;
//
//?>
