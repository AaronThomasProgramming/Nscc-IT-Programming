<!-- url http://localhost/lab3/PartA/films.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Our Actor List</title>
    <style>
        table, th, tr, td { border: solid 2px black;}
    </style>
</head>
<body>
<table>
    <thead>
    <th>First Name</th>
    <th>Last Name</th>
    </thead>
    <tbody>
    <?php
    include_once("dbconn.php");
    //                require_once("dbconn.php");
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
</body>
</html>
