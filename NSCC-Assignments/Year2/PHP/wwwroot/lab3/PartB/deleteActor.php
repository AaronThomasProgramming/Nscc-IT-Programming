<!DOCTYPE html>
<html>
<head>
    <title>Delete actors</title>
</head>
<body>
<?php
if(!empty($_POST['delete']))
{
    require_once("dbconn.php");
    $conn = getDbConnection();
//                $conn = mysqli_connect("database", "root", "inet2005", "sakila");
//                if(!$conn)
//                {
//                    die("Unable to connect to database: " . mysqli_connect_error());
//                }

    $sql = "DELETE FROM actor WHERE actor_id = ";
    $sql .= $_POST['delete'];
    $sql .= ";";

    $total_affected_rows=mysqli_affected_rows($conn);

    $result = mysqli_query($conn, $sql);
    if(!$result)
    {
        die("Unable to delete record: " . mysqli_error($conn));
    }
    else
    {
        echo "Successfully deleted " . $conn ->affected_rows .  " record(s)";
        echo $_POST['delete'];
    }

    mysqli_close($conn);
}

?>
</body>
</html>
