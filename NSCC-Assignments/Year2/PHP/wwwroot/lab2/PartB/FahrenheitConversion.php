<!--url http://localhost/lab2/PartB/FahrenheitConversion.php -->
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
<a href="http://localhost/lab2/PartB/CelsiusConversion.php">To Celsius</a>
<h1>Fahrenheit to Celsius</h1>

<table>
    <tr>
        <?php
        echo "<tr bgcolor='gray'>";
        echo "<th>Fahrenheit</th>";
        echo "<th>Celsius</th>";

        for ($i = 0; $i <= 100; $i++) {
            static $Counter = 1;
            $Celsius = $i - 32 * 5 / 9;;
            $rCel = round($Celsius, 0);
            if ($Counter == 1) {
                echo "<tr>";
                echo "<td>$i</td>";
                echo "<td> $rCel </td>";
                echo "</tr>";
                $Counter++;
            }
            else {
                echo "<tr bgcolor='gray'>";
                echo "<td>$i</td>";
                echo "<td> $rCel </td>";
                echo "</tr>";
                $Counter--;
            }

        }
        echo "<tr>";
        ?>
    </tr>
</table>
</body>
</html>