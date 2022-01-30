<!--url http://localhost/lab1/PartB/index.php -->

<?php
    date_default_timezone_set("America/Halifax");

    $name = "Michael";
    $age = 29;
    $height = 5.8;
    $active = true;
?>


<!DOCTYPE html>
    <html>
    <body>
<!--        step 1-2-->
        <?php
            echo "<h1>Greetings from Lab 1.</h1>";
        ?>
<!--        step 1-4-->
        <?php
            echo "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br>
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br>
                   quae ab illo inventore veritatis et quasi architecto beatae vitae</p>";
        ?>
<!--        step 1-5-->
        <?php
            echo "<h3>STEP 1-5 COMPLETE</h3>";
        ?>

<!--        step 2-->
        <?php
            $myName = "Aaron";
            echo $myName;
        ?>

<!--        step 3-->
        <?php
            $myName = "Aaron";
            echo "<p> My name is " . $myName . " I'm coding Lab1 </p>";
        ?>
<!--        step 4-->
        <?php
//            numbers for equation 1
            $equation1Number1 = 32;
            $equation1Number2 = 14;
            $equation1Number3 = 83;
//            numbers for equation 1
            $equation2Number1 = 1024;
            $equation2Number2 = 128;
            $equation2Number3 = 7;
//            numbers for equation 1
            $equation3Number1 = 769;
            $equation3Number2 = 6;
//            sum of equations
            $sumEquation1 = ($equation1Number1 * $equation1Number2) / $equation1Number3;
            $sumEquation2 = ($equation2Number1 / $equation2Number2) - $equation2Number3;
            $sumEquation3 = $equation3Number1 /$equation3Number2;

            echo "(". $equation1Number1 . " * " . $equation1Number2 .") 
             + " . $equation1Number3 . " = " . round($sumEquation1, 1) . "<br>";
            echo "(". $equation2Number1 . " * " . $equation2Number2 .") 
             + "  . $equation2Number3 . " = " . round($sumEquation2, 1) . "<br>";
            echo $equation3Number1 . " / " . $equation3Number2 . " = " .
                round($sumEquation3, 1) . "<br>"
        ?>
<!--        step 5-->
        <?php
            for ($i = 10; $i >= 0; $i--) {
                echo $i . "..";
                if ($i == 0) {
                    echo "blast off<br>";
                }
            }
        ?>
<!--        step 6-->
        <?php
            $colors = array("Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Purple <br>");
            $colorArrayLength = count($colors);
//            for loop
            for ($i = 0; $i <= $colorArrayLength; $i++) {
               echo  $colors[$i] . " ";
            }
//            for each loop
            foreach ($colors as $currentColor) {
                echo $currentColor . " ";
            }
//            while loop
            $i = 0;
            while ($i < $colorArrayLength) {
                echo $colors[$i] . " ";
                $i++;
            }
        ?>
    </body>
</html>
