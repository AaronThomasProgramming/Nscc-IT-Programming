<?php

require_once("dbconn.php");
$conn = getDbConnection();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Update actors</title>
</head>
<body>
<form id="updateActor" name="updateActor" method="post" action="updateActor.php">
    <p><label><input type="hidden" name="actorId" id="actorId"
                               value="<?php if(isset($_POST['update'])) {echo htmlentities($_POST['update']);} ?>" /></label></p>
    <p><label>First Name: <input type="text" name="fName" id="fName"
                                 value="<?php if(isset($_POST['firstName'])) {echo htmlentities($_POST['firstName']);} ?>" /></label></p>
    <p><label>Last Name: <input type="text" name="lName" id="lName"
                                value="<?php if(isset($_POST['lastName'])) {echo htmlentities($_POST['lastName']);} ?>"/></label></p>
    <p><input type="submit" id="submit" value="update" /></p>
</form>
<?php
if(!empty($_POST['actorId']) && !empty($_POST['fName']) && !empty($_POST['lName']))
{
    $sql = "UPDATE actor SET first_name = '";
    $sql .= $_POST['fName'];
    $sql .= "', last_name = '";
    $sql .= $_POST['lName'];
    $sql .= "' WHERE actor_id = ";
    $sql .= $_POST['actorId'];
    $sql .= ";";

    $result = mysqli_query($conn, $sql);
    if(!$result)
    {
        die("Unable to update record: " . mysqli_error($conn));
    }
    else
    {
        echo "Successfully updated " . $conn ->affected_rows .  " record(s)";
        echo "   <a href=http://localhost/lab3/PartB/insertActor.php>Back to Actor List</a>";
    }
}

?>
</body>
</html>
<?php mysqli_close($conn); ?>


