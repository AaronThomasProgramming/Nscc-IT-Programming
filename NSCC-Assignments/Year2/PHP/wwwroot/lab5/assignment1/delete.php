<?php
require('isLoggedIn.php');
checkIfLoggedIn();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Delete actors</title>
</head>
<body>

<?php
if(!empty($_POST['empNum']))
{
    try{

        //ATTEMPT TO CONNECT TO DATABASE
        include_once("conDB.php");
        $conn = getDbConnection();
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //BUILD OUR QUERY/STATEMENT WITH PREPARE STATEMENTS
        $stmt = $conn->prepare("CALL deleteEmployee(:employeeId);");//exe proc
        $stmt->bindParam(":employeeId", $_POST['empNum']);

        //EXECUTE THE STATEMENT
        $stmt->execute();


        echo "Success!: " . $stmt->rowCount() . " row(s) deleted";

    } catch (PDOException $ex){
        die($ex->getMessage());
    } finally {
        //close the connection
        $conn = null;
    }
}

if(!empty($_POST['empNum']))
{
    try{
        $currentDateTime = date('Y-m-d H:i:s');
        //ATTEMPT TO CONNECT TO DATABASE
        include_once("conDB.php");
        $conn = getDbConnection();
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //BUILD OUR QUERY/STATEMENT WITH PREPARE STATEMENTS
        $stmt = $conn->prepare("INSERT INTO former_emp (orig_emp_id, emp_LName, emp_FName, date_left) 
        VALUES (:origID, :fName, :lName, :currentDate);");
        $stmt->bindParam(":origID", $_POST['empNum']);
        $stmt->bindParam(":fName", $_POST['empFName']);
        $stmt->bindParam(":lName", $_POST['empLName']);
        $stmt->bindParam(":currentDate", $currentDateTime);

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
</body>
</html>