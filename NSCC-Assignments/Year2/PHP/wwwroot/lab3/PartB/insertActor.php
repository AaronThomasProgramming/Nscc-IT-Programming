<!-- url http://localhost/lab3/PartB/insertActor.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Add new actors</title>
    <style>
        table, th, tr, td { border: solid 2px black;}
    </style>
</head>
<body>
<table>
    <thead>
    <th>ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Date Added</th>
    </thead>
    <tbody>
<?php
//    if(!empty($_POST['firstName']) && !empty($_POST['lastName']))
//    {
        include_once("dbconn.php");
        $conn = getDbConnection();
//                $conn = mysqli_connect("database", "root", "inet2005", "sakila");
//                if(!$conn)
//                {
//                    die("Unable to connect to database: " . mysqli_connect_error());
//                }
    if(!empty($_POST['firstName']) && !empty($_POST['lastName'])) {
        $sql = "INSERT INTO actor (first_name, last_name) VALUES ('";
        $sql .= $_POST['firstName'];
        $sql .= "','";
        $sql .= $_POST['lastName'];
        $sql .= "');";

        $result = mysqli_query($conn, $sql);
        if (!$result) {
            die("Unable to insert record: " . mysqli_error($conn));
        }
    }
//        else
//        {
//            echo "<h2>Success! Record was entered.</h2>";
//        }

//    }

//        $table = mysqli_query($conn,"SELECT * FROM actor order by actor_id DESC limit 0, 10");
//
//        while ($row = mysqli_fetch_assoc($table)):
//            echo "<tr>";
//            echo "<td>" . $row["actor_id"] . "</td>" ;
//            echo "<td>" . $row["first_name"] . "</td>" ;
//            echo "<td>" . $row["last_name"] . "</td>" ;
//            echo "<td>" . $row["last_update"] . "</td>" ;
//            echo "<tr>";
//        endwhile;
//
//        mysqli_close($conn);

        $table = mysqli_query($conn,"SELECT * FROM actor order by actor_id DESC limit 0, 10");

        while($row = mysqli_fetch_assoc($table)):

            ?>
            <tr>
                <td><?php echo $row['actor_id'] ?></td>
                <td><?php echo $row['first_name'] ?></td>
                <td><?php echo $row['last_name'] ?></td>
                <td><?php echo $row['last_update'] ?></td>
            </tr>

        <?php endwhile;
        mysqli_close($conn);
        ?>
<!--?>-->
    </tbody>
</table>
<form action="deleteActor.php"  method="post">
    <p>ID to Delete:<input name="delete" type="text"></p>
    <p><input name="Submit Query" type="submit" value="Delete"></p>
</form>
<form action="updateActor.php"  method="post">
    <p>ID to Update:<input name="update" type="text" id="update" placeholder="update"></p>
    <p><input name="Submit Query" type="submit" value="Update"></p>
</form>
</body>
</html>
