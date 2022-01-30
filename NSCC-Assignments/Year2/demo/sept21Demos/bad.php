<!DOCTYPE html>
<html>
    <head>
        <title>Bad table example</title>
    </head>
    <body>
        <?php
        echo "<table border='1'>";
        echo "<thead>";
        echo "<th>Pounds";
        echo "</th>";
        echo "<th>Kilos";
        echo "</th>";
        echo "</thead>";
        echo "<tbody>";

        $pounds = 0;

        while($pounds <= 100)
        {
            $kilos = $pounds / 2.2;

            echo "<tr>";

            echo "<td>";
            echo $pounds;
            echo "</td>";

            echo "<td>";
            echo $kilos;
            echo "</td>";

            echo "</tr>";

            $pounds += 10;
        }

        echo "</tbody>";
        echo "</table>";

        ?>
    </body>
</html>