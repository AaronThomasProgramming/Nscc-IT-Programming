<!--url http://localhost/lab2/PartB/CelsiusConversion.php -->
<!DOCTYPE html>
<html>
<head>
    <style>
        table, th, td {
            border: 1px solid black;
        }
    </style>
</head>
<body>
<a href="http://localhost/lab2/PartB/FahrenheitConversion.php">To Fahrenheit</a>
<h1>Celsius to Fahrenheit</h1>

<table>
    <?php
    echo "<tr bgcolor='gray'>";
        echo "<th>Celsius</th>";
        echo "<th>Fahrenheit</th>";

        for ($i = 0; $i <= 100; $i++) {
            static $Counter = 1;
            $Fahrenheit= $i / 5 * 9 + 32;
            $rFah = round($Fahrenheit, 0);
            if ($Counter == 1) {
                echo "<tr>";
                echo "<td>$i</td>";
                echo "<td> $rFah </td>";
                echo "</tr>";
                $Counter++;
            }
            else {
                echo "<tr bgcolor='gray'>";
                echo "<td>$i</td>";
                echo "<td> $rFah </td>";
                echo "</tr>";
                $Counter--;
            }

        }
    echo "<tr>";
    ?>
</table>
</body>
</html>
