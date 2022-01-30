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
<!--<form action="--><?php //echo $_SERVER['PHP_SELF']; ?><!--" method="post" name="updateEmp" id="updateEmp" onsubmit=" return valid()">-->
<!--    <p><input type="hidden" name="eNum" id="eNum" value="--><?php //if(isset($_POST['empNum'])) { echo $_POST['empNum']; }else {echo $_POST['eNum'];} ?><!--" /></label></p>-->
<!--    <p><input type="hidden" name="eDate" id="eDate" value="--><?php //if(isset($_POST['empBirth'])) { echo $_POST['empBirth']; } else {echo $_POST['eDate'];}  ?><!--" /><span id="errorBirth"></p>-->
<!--    <p><input type="hidden" name="eFName" id="eFName" value="--><?php //if(isset($_POST['empFName'])) { echo $_POST['empFName']; } else {echo $_POST['eFName'];}?><!--" /><span id="errorFName"></span></p>-->
<!--    <p><input type="hidden" name="eLName" id="eLName" value="--><?php //if(isset($_POST['empLName'])) { echo $_POST['empLName']; } else {echo $_POST['eLName'];}?><!--" /><span id="errorLName"></span></p>-->
<!--    <p><input type="hidden" name="eGender" id="eGender" value="--><?php //if(isset($_POST['empGender'])) { echo $_POST['empGender']; } else {echo $_POST['eGender'];}?><!--" /><span id="errorGender"></span></p>-->
<!--    <p><input type="hidden" name="eHire" id="eHire" value="--><?php //if(isset($_POST['empHire'])) { echo $_POST['empHire']; } else {echo $_POST['eHire'];}?><!--" /><span id="errorHire"></p>-->
<!--</form>-->
<?php
if(!empty($_POST['empNum']))
{
    require_once("dbconn.php");
    $conn = getDbConnection();
//                $conn = mysqli_connect("database", "root", "inet2005", "sakila");
//                if(!$conn)
//                {
//                    die("Unable to connect to database: " . mysqli_connect_error());
//                }
    $currentDateTime = date('Y-m-d H:i:s');
    $sql = "DELETE FROM employees.employees WHERE emp_no = ";
    $sql .= $_POST['empNum'];
    $sql .= ";";

//    $extraSQL = "INSERT INTO employees.former_emp (orig_emp_id, emp_LName, emp_FName, date_left) VALUES ('";
//    $extraSQL .= $_POST['empNum'];
//    $extraSQL .= "','";
//    $extraSQL .= $_POST['empLName'];
//    $extraSQL .= "','";
//    $extraSQL .= $_POST['empFName'];
//    $extraSQL .= "','";
//    $extraSQL .= "bob";
//    $extraSQL .= "');";

    $total_affected_rows=mysqli_affected_rows($conn);


//    echo $fname =$_POST['empFName'];

    $result = mysqli_query($conn, $sql);
    if(!$result)
    {
        echo $currentDateTime = date('Y-m-d H:i:s') . "d";
        $error = mysqli_errno($conn);
        $sql = "Insert into employees.ErrorLogging (error_num, log_date) VALUES (6,  'bob')";
        die("Unable to delete record: " . mysqli_errno($conn));
//        $error = mysqli_errno($conn);
//         echo $currentDateTime = date('Y-m-d H:i:s') . "d";
//        $sql = "Insert into employees.ErrorLogging (error_num, log_date) VALUES (mysqli_errno($conn),  $currentDateTime)";
    }
    else
    {
        echo "Successfully deleted " . $conn ->affected_rows .  " record(s)";
//        echo $_POST['delete'];
//        $currentDateTime = date('Y-m-d H:i:s');
//        $fName = $_POST['eFName'];
//        $lName = $_POST['eLName'];
//        $num = $_POST['empNum'];
//        $formerEmp = "Insert into employees.former_emp (orig_emp_id, emp_Fname, emp_Lname, date_left) VALUES ($num, $fName, $lName, $currentDateTime)";
    }
//    echo "   <a href=records.php>Back to Actor List</a>";

    mysqli_close($conn);
}

if(!empty($_POST['empNum']))
{
    require_once("dbconn.php");
    $conn = getDbConnection();
//                $conn = mysqli_connect("database", "root", "inet2005", "sakila");
//                if(!$conn)
//                {
//                    die("Unable to connect to database: " . mysqli_connect_error());
//                }
    $currentDateTime = date('Y-m-d H:i:s');

    $sql = "INSERT INTO employees.former_emp (orig_emp_id, emp_LName, emp_FName, date_left) VALUES ('";
    $sql .= $_POST['empNum'];
    $sql .= "','";
    $sql .= $_POST['empLName'];
    $sql .= "','";
    $sql .= $_POST['empFName'];
    $sql .= "','";
    $sql.= $currentDateTime;
    $sql .= "');";

    $total_affected_rows=mysqli_affected_rows($conn);


//    echo $fname =$_POST['empFName'];

    $result = mysqli_query($conn, $sql);
    if(!$result)
    {
        echo $currentDateTime = date('Y-m-d H:i:s') . "d";
        $error = mysqli_errno($conn);
        $sql = "Insert into employees.ErrorLogging (error_num, log_date) VALUES (6,  'bob')";
        die("Unable to delete record: " . mysqli_errno($conn));
//        $error = mysqli_errno($conn);
//         echo $currentDateTime = date('Y-m-d H:i:s') . "d";
//        $sql = "Insert into employees.ErrorLogging (error_num, log_date) VALUES (mysqli_errno($conn),  $currentDateTime)";
    }
    else
    {
        echo "Successfully deleted " . $conn ->affected_rows .  " record(s)";
//        echo $_POST['delete'];
//        $currentDateTime = date('Y-m-d H:i:s');
//        $fName = $_POST['eFName'];
//        $lName = $_POST['eLName'];
//        $num = $_POST['empNum'];
//        $formerEmp = "Insert into employees.former_emp (orig_emp_id, emp_Fname, emp_Lname, date_left) VALUES ($num, $fName, $lName, $currentDateTime)";
    }
//    echo "   <a href=records.php>Back to Actor List</a>";

    mysqli_close($conn);
}
//$extraSQL = "INSERT INTO employees.former_emp (orig_emp_id, emp_LName, emp_FName, date_left) VALUES ('";
//$extraSQL .= $_POST['empNum'];
//$extraSQL .= "','";
//$extraSQL .= $_POST['empLName'];
//$extraSQL .= "','";
//$extraSQL .= $_POST['empFName'];
//$extraSQL .= "','";
//$extraSQL .= "bob";
//$extraSQL .= "');";
?>
<a href="records.php">Go Back</a>
</body>
</html>