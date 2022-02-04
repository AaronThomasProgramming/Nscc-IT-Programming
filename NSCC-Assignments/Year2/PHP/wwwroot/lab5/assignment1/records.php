<?php
require('isLoggedIn.php');
checkIfLoggedIn();
?>
<!-- http://localhost/assignment1/records.php -->
<?php

if(isset($_POST['submit'])) {
    $search = $_POST['string'];
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Search First & Last Names From Database</title>
    <style>
        table, th, tr, td { border: solid 2px black;}
    </style>
    <script src="valid.js" type="text/javascript"></script>
</head>
<body>
<form name="LogoutForm" action="logOut.php" method="post">
    <input type="submit" name="logoutButton" value="Log Out" />
</form>
<form name="insertForm" action="insert.php" method="POST">
    <b>Insert New Records into Database<br></b>
    <input type="submit" name="deleteButton" value="Insert Record Page" />
</form>
<form action="<?php $_SERVER['PHP_SELF'] ?>"  method="post" name="guessinggame" >
    <b>Search First & Last Names From Database</b>
    <p>Search:
        <input name="string" type="text" value="<?php if (isset($search)) echo $search; ?>">
    </p>
    <p>
        <input name="submit" type="submit" value="submit">
    </p>
</form>
<table>
    <thead>
    <th>Emp. Number</th>
    <th>Birth Date</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Gender</th>
    <th>Hire Date</th>
    <th>Update</th>
    <th>Delete</th>
    </thead>
    <tbody>
    <?php
    if(isset($_GET['pageNum'])) {
        $pageNum = $_GET['pageNum'];
    } else {
        $pageNum = 1;
    }
    $recordLimit = 25;
    $offset = ($pageNum-1) * $recordLimit;

    $input = $_POST['string'];

    try{
//        $conn = new PDO("mysql:host=database;dbname=employees", "root", "inet2005");
        include_once("conDB.php");
        $conn = getDbConnection();
        //set the pdo error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $totalPagesSQL = $conn->prepare("SELECT COUNT(*) FROM employees");
        $totalPagesSQL->execute();
        $totalRows = $totalPagesSQL->fetchColumn();

        $totalPages = ceil($totalRows / $recordLimit);
        echo "Total Pages: ". $totalPages . "<br>";
        echo "Total Rows: ".$totalRows. "<br>";

        $sString = $_POST['string'];
        echo $sString. "<br>";

        $sString = "%$sString%";
        $stmt = $conn->prepare("SELECT * FROM employees 
where first_name like :sString or last_name like :sString LIMIT $offset, $recordLimit");
//        $sString = "%$sString%";

        $stmt->bindValue(":sString", '%'.$sString.'%');
//                $stmt->bindParam("firstname", $firstname);
//        $stmt->bindParam(":sInput", $input);
        $stmt->execute();

        $array= $stmt->fetchAll();

        //echo $array;

        foreach ($array as $row){
//
            echo "<tr>";
            echo "<td>" . $row['emp_no'] . "</td>";
            echo "<td>" . $row['birth_date'] . "</td>";
            echo "<td>". $row['first_name'] . "</td>";
            echo "<td>". $row['last_name'] . "</td>";
            echo "<td>". $row['gender'] . "</td>";
            echo "<td>". $row['hire_date'] . "</td>";
            ?>
            <td>
                <form name="updateForm" action="update.php" method="POST">
                    <input type="hidden" name="empNum" value="<?php echo $row['emp_no']; ?>" />
                    <input type="hidden" name="empBirth" value="<?php echo $row['birth_date']; ?>" />
                    <input type="hidden" name="empFName" value="<?php echo $row['first_name']; ?>" />
                    <input type="hidden" name="empLName" value="<?php echo $row['last_name']; ?>" />
                    <input type="hidden" name="empGender" value="<?php echo $row['gender']; ?>" />
                    <input type="hidden" name="empHire" value="<?php echo $row['hire_date']; ?>" />
                    <input type="submit" name="updateButton" value="Update" />
                </form>
            </td>
            <td>
                <form name="deleteForm" action="delete.php" method="POST">
                    <input type="hidden" name="empNum" value="<?php echo $row['emp_no']; ?>" />
                    <input type="hidden" name="empBirth" value="<?php echo $row['birth_date']; ?>" />
                    <input type="hidden" name="empFName" value="<?php echo $row['first_name']; ?>" />
                    <input type="hidden" name="empLName" value="<?php echo $row['last_name']; ?>" />
                    <input type="hidden" name="empGender" value="<?php echo $row['gender']; ?>" />
                    <input type="hidden" name="empHire" value="<?php echo $row['hire_date']; ?>" />
                    <input type="submit" name="deleteButton" value="Delete" onclick="confirmDelete(this.form)"/>
                </form>
            </td>
            <?php
            echo "</tr>";




        }

        $conn = null;
    } catch (PDOException $e){
        die($e->getMessage());
    }

       ?>
    <ul class="pagination">
        <li><a href="?pageNum=1">First</a></li>
        <li class="<?php if($pageNum <= 1){ echo 'disabled'; } ?>">
            <a href="<?php if($pageNum <= 1){ echo '#'; } else { echo "?pageNum=".($pageNum - 1); } ?>">Prev</a>
        </li>
        <li class="<?php if($pageNum >= $totalPages){ echo 'disabled'; } ?>">
            <a href="<?php if($pageNum >= $totalPages){ echo '#'; } else { echo "?pageNum=".($pageNum + 1); } ?>">Next</a>
        </li>
        <li><a href="?pageNum=<?php echo $totalPages; ?>">Last</a></li>
    </ul>
    </tbody>
</table>
</body>
</html>
