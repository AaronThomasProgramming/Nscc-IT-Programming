<!DOCTYPE html>
<html>
    <head>
        <title>Best table example</title>
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

        while($pounds <= 100):
            $kilos = $pounds / 2.2;
        ?>

            <tr>

            <td><?php echo $pounds ?></td>
            <td><?php echo $kilos ?></td>

            </tr>

        <?php

            $pounds += 10;
        endwhile
        ?>

            </tbody>
        </table>
    </body>
</html>