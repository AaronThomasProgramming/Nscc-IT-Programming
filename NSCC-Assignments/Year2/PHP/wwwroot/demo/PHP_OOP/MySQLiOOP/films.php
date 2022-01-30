<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Sakila Films</title>
        <style type="text/css">
            table
            {
               border: 1px solid purple;
            }
            th, td
            {
               border: 1px solid red;
            }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <th>Film</th>
                <th>Description</th>
            </tr>
        <?php
        // put your code here

        $db = @new mysqli("localhost","root", "inet2005", "sakila");

        if ($db->connect_errno)
        {
                die('Could not connect to the Sakila Database: ' .
                        $db->connect_errno);
        }

        $result = @$db->query("SELECT * FROM film LIMIT 0,10");
        if(!$result)
        {
                die('Could not retrieve records from the Sakila Database: ' .
                        $db->error);
        }
        while ($row = $result->fetch_array())
        {
                echo "<tr>";
                echo "<td>" . $row['title'] . "</td>";
                echo "<td>". $row['description'] . "</td>";
                echo "</tr>";
        }

        $db->close();

        ?>
        </table>
    </body>
</html>
