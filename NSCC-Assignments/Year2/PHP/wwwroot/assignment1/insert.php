<?php
require('isLoggedIn.php');
checkIfLoggedIn();
?>
<!-- url http://localhost/lab3/PartB/insertActor.html -->
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>html add actor</title>
    <script src="valid.js" type="text/javascript"></script>
</head>
<body>
<form action="insert.php" method="post">
    <p><input type="hidden" name="eNum" id="eNum" /></label></p>
    <p><label>Birth Date: <input type="text" name="eDate" id="eDate"  /></label></p>
    <p><label>First Name: <input type="text" name="eFName" id="eFName" /></label></p>
    <p><label>Last Name: <input type="text" name="eLName" id="eLName"/></label></p>
    <p><label>Gender: <input type="text" name="eGender" id="eGender"/></label></p>
    <p><label>Hire Date: <input type="text" name="eHire" id="eHire" /></label></p>
    <p><input type="submit" id="submit" value="submit"/></p>
</form>
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
if(!empty($_POST['eDate']) && !empty($_POST['eFName'])&& !empty($_POST['eLName'])&& !empty($_POST['eGender'])&& !empty($_POST['eHire'])) {
    $sql = "INSERT INTO employees.employees (birth_date, first_name, last_name, gender, hire_date) VALUES ('";
    $sql .= $_POST['eDate'];
    $sql .= "','";
    $sql .= $_POST['eFName'];
    $sql .= "','";
    $sql .= $_POST['eLName'];
    $sql .= "','";
    $sql .= $_POST['eGender'];
    $sql .= "','";
    $sql .= $_POST['eHire'];
    $sql .= "');";

    $currentDateTime = date('Y-m-d H:i:s');
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        die("Unable to insert record: " . mysqli_error($conn));
        $error = mysqli_errno($conn);
        $sql = "Insert into employees.ErrorLogging (error_num, log_date) VALUES (mysqli_errno($conn), $currentDateTime)";
    } else {
        echo "<h2>Success! Record was entered.</h2>";
    }
}
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

//$table = mysqli_query($conn,"SELECT * FROM actor order by actor_id DESC limit 0, 10");
//
//while($row = mysqli_fetch_assoc($table)):
//
//    ?>
<a href="records.php">Go Back</a>
<!--    <tr>-->
<!--        <td>--><?php //echo $row['actor_id'] ?><!--</td>-->
<!--        <td>--><?php //echo $row['first_name'] ?><!--</td>-->
<!--        <td>--><?php //echo $row['last_name'] ?><!--</td>-->
<!--        <td>--><?php //echo $row['last_update'] ?><!--</td>-->
<!--    </tr>-->

<?php
mysqli_close($conn);
?>
</body>
</html>
