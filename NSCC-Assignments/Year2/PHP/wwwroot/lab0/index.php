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
        <h1>Welcome to the Lab 0</h1>

        <?php
        echo "Hello from PHP ";
        echo "Today's date is <br/>" . date("Y/m/d");
        
        echo "<p> We're going to have fun with " . $name . " in PHP!!!</p>";
        
        echo date("h:i:sa");
        ?>
    </body>
</html>
