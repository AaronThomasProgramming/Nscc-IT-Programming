<?php
require('isLoggedIn.php');
checkIfLoggedIn();
?>
<?php
require_once("dbconn.php");
$conn = getDbConnection();
?>
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
    $currentDateTime = date('Y-m-d H:i:s');
    $sql = "UPDATE employees.employees SET first_name = '";
    $sql .= $_POST['eFName'];

    $sql .= "', last_name = '";
    $sql .= $_POST['eLName'];

    $sql .= "', birth_date = '";
    $sql .= $_POST['eDate'];

    $sql .= "', gender = '";
    $sql .= $_POST['eGender'];

    $sql .= "', hire_date = '";
    $sql .= $_POST['eHire'];

    $sql .= "' WHERE emp_no = ";
    $sql .= $_POST['eNum'];
    $sql .= ";";

    $result = mysqli_query($conn, $sql);
    if(!$result)
    {
        die("Unable to update record: " . mysqli_error($conn));
        $error = mysqli_errno($conn);
        $sql = "Insert into employees.ErrorLogging (error_num, log_date) VALUES (mysqli_errno($conn), $currentDateTime)";
    }
    else
    {
        echo "Successfully updated " . $conn ->affected_rows .  " record(s)";
//        echo "<a href=records.php>Back to Actor List</a>";
    }
}

?>
<a href="records.php">Go Back</a>
</body>
</html>
<?php mysqli_close($conn); ?>


<?php
/*
require_once("dbconn.php");
$conn = getDbConnection();
*/?><!--


<!DOCTYPE html>
<html>
<head>
    <title>Update Employees</title>
</head>
<body>
<form id="updateEmp" name="updateEmp" method="post" action="update.php">
    <p><label><input type="hidden" name="empID" id="empID" value="<?php /*echo $_POST['empNum'] */?>" /></label></p>
    <p><label>Birth Date: <input type="text" name="empBirth" id="empBirth" value="<?php /*$_POST['empBirth'] */?>" /></label></p>
    <p><label>First Name: <input type="text" name="fName" id="fName" value="<?php /*$_POST['empFName'] */?>"/></label></p>
    <p><label>Last Name: <input type="text" name="lName" id="lName" value="<?php /*$_POST['empLName'] */?>"/></label></p>
    <p><label>Gender: <input type="text" name="empGender" id="empGender" value="<?php /*$_POST['empGender'] */?>"/></label></p>
    <p><label>Hire Date: <input type="text" name="empHire" id="empHire" value="<?php /*$_POST['empHire'] */?>"/></label></p>
    <p><input type="submit" id="submit" value="update" /></p>
</form>
<?php
/*if(!empty($_POST['empNum']) && !empty($_POST['empFName']) && !empty($_POST['empLName']))
{
    $sql = "UPDATE employees.employees SET first_name = '";
    $sql .= $_POST['empFName'];

    $sql .= "', last_name = '";
    $sql .= $_POST['empLName'];

    $sql .= "', birth_date = '";
    $sql .= $_POST['empBirth'];

    $sql .= "', gender = '";
    $sql .= $_POST['empGender'];

    $sql .= "', hire_date = '";
    $sql .= $_POST['empHire'];

    $sql .= "' WHERE emp_no = ";
    $sql .= $_POST['empNum'];
    $sql .= ";";

    $result = mysqli_query($conn, $sql);
    if(!$result)
    {
        die("Unable to update record: " . mysqli_error($conn));
    }
    else
    {
        echo "Successfully updated " . $conn ->affected_rows .  " record(s)";
        echo "<a href=records.php>Back to Actor List</a>";
    }
}

*/?>
</body>
</html>
--><?php /*mysqli_close($conn); */?>