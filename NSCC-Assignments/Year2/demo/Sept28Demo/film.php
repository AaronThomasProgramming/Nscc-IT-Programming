<!DOCTYPE html>
<html>
    <head>
        <title>Our film list</title>
        <style>
            table, th, tr, td { border: solid 2px black;}
        </style>
    </head>
    <body>
        <table>
            <thead>
                <th>Title</th>
                <th>Description</th>
            </thead>
            <tbody>
            <?php
                require_once("dbconn.php");
                $conn = getDbConnection();

                $result = mysqli_query($conn,"SELECT * FROM film LIMIT 0,10");
                if(!$result)
                {
                    die("Could not retrieve records from database: " . mysqli_error($conn));
                }

                while($row = mysqli_fetch_assoc($result)):
                ?>
                    <tr>
                        <td><?php echo $row['title'] ?></td>
                        <td><?php echo $row['description'] ?></td>
                    </tr>

                <?php
                endwhile;

                mysqli_close($conn);
            ?>
            </tbody>
        </table>
        <?php include_once("footer.html"); ?>
    </body>
</html>