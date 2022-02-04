<?php
require('isLoggedIn.php');
checkIfLoggedIn();
?>
<?php
//require_once("dbconn.php");
//$conn = getDbConnection();
//?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
    <script src="valid.js" type="text/javascript"></script>
</head>
<h1>php version</h1>
<body>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="updateEmp" id="updateEmp" onsubmit=" return valid()">
        <p><input type="hidden" name="eNum" id="eNum" value="<?php if(isset($_POST['empNum'])) { echo $_POST['empNum']; }else {echo $_POST['eNum'];} ?>" /></label></p>
        <p><label>Birth Date: <input type="text" name="eDate" id="eDate" value="<?php if(isset($_POST['empBirth'])) { echo $_POST['empBirth']; } else {echo $_POST['eDate'];}  ?>" /><span id="errorBirth"></label></p>
        <p><label>First Name: <input type="text" name="eFName" id="eFName" value="<?php if(isset($_POST['empFName'])) { echo $_POST['empFName']; } else {echo $_POST['eFName'];}?>" /></label><span id="errorFName"></span></p>
        <p><label>Last Name: <input type="text" name="eLName" id="eLName" value="<?php if(isset($_POST['empLName'])) { echo $_POST['empLName']; } else {echo $_POST['eLName'];}?>" /></label><span id="errorLName"></span></p>
        <p><label>Gender: <input type="text" name="eGender" id="eGender" value="<?php if(isset($_POST['empGender'])) { echo $_POST['empGender']; } else {echo $_POST['eGender'];}?>" /></label><span id="errorGender"></span></p>
        <p><label>Hire Date: <input type="text" name="eHire" id="eHire" value="<?php if(isset($_POST['empHire'])) { echo $_POST['empHire']; } else {echo $_POST['eHire'];}?>" /></label><span id="errorHire"></p>
        <p><input type="submit" id="submit" value="submit" /></p>
    </form>

<?php
if(!empty($_POST['eNum']) && !empty($_POST['eFName']) && !empty($_POST['eLName'])&& !empty($_POST['eDate'])&& !empty($_POST['eGender'])&& !empty($_POST['eHire']))
{
    $currentDateTime = date('Y-m-d');
    try{

        //ATTEMPT TO CONNECT TO DATABASE
        include_once("conDB.php");
        $conn = getDbConnection();
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //BUILD OUR QUERY/STATEMENT WITH PREPARE STATEMENTS
        $stmt = $conn->prepare("update employees set birth_date = :birthDate, first_name = :firstName,
        last_name = :lastName, gender = :gender, hire_date = :hireDate where emp_no = :empID");
        $stmt->bindValue(":birthDate", $_POST['eDate']);
        $stmt->bindValue(":firstName", $_POST['eFName']);
        $stmt->bindValue(":lastName", $_POST['eLName']);
        $stmt->bindValue(":gender", $_POST['eGender']);
        $stmt->bindValue(":hireDate", $_POST['eHire']);
        $stmt->bindValue(":empID", $_POST['eNum']);

        //EXECUTE THE STATEMENT/stored proc
        $stmt->execute();

        echo "Success!: " . $stmt->rowCount() . " row(s) updated";

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
<?php //mysqli_close($conn); ?>
