<!DOCTYPE html>
<html>
    <head>
        <title>Better table example</title>
        <style>
            table tr td {border: 1px solid red}
        </style>
    </head>
    <body>
        <table>
            <thead>
                <th>Pounds</th>
                <th>Kilos</th>
            </thead>
            <tbody>

        <?php


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



        ?>

            </tbody>
        </table>
    </body>
</html>