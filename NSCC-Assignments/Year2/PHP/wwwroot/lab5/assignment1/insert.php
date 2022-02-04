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

//include_once("dbconn.php");
//$conn = getDbConnection();

if(!empty($_POST['eDate']) && !empty($_POST['eFName'])&& !empty($_POST['eLName'])&& !empty($_POST['eGender'])&& !empty($_POST['eHire'])) {
    try{

        //ATTEMPT TO CONNECT TO DATABASE
        include_once("conDB.php");
        $conn = getDbConnection();
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //BUILD OUR QUERY/STATEMENT WITH PREPARE STATEMENTS
        $stmt = $conn->prepare("INSERT INTO employees (birth_date, first_name, last_name, gender, hire_date) 
        values (:birthDate, :firstName, :lastName, :gender, :hireDate);");
        $stmt->bindParam(":birthDate", $_POST['eDate']);
        $stmt->bindParam(":firstName", $_POST['eFName']);
        $stmt->bindParam(":lastName", $_POST['eLName']);
        $stmt->bindParam(":gender", $_POST['eGender']);
        $stmt->bindParam(":hireDate", $_POST['eHire']);

        //EXECUTE THE STATEMENT/stored proc
        $stmt->execute();

        echo "Success!: " . $stmt->rowCount() . " row(s) entered";

    } catch (PDOException $ex){
        die($ex->getMessage());
    } finally {
        //close the connection
        $conn = null;
    }


}
?>
<a href="records.php">Go Back</a>
<?php
//mysqli_close($conn);
//?>
</body>
</html>
