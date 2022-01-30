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

    include_once("dbconn.php");

    $conn = getDbConnection();

    $totalPagesSQL = "SELECT COUNT(*) FROM employees.employees";
    $totalResult = mysqli_query($conn, $totalPagesSQL);
    $totalRows = mysqli_fetch_array($totalResult)[0];
    $totalPages = ceil($totalRows / $recordLimit);

    $sql = "SELECT * FROM employees.employees where first_name like 
                                        '%$input%' or last_name like '%$input%' LIMIT $offset, $recordLimit";
    $resData = mysqli_query($conn, $sql);

    while($row = mysqli_fetch_assoc($resData)):

        ?>
        <tr>
            <td><?php echo $row['emp_no'] ?></td>
            <td><?php echo $row['birth_date'] ?></td>
            <td><?php echo $row['first_name'] ?></td>
            <td><?php echo $row['last_name'] ?></td>
            <td><?php echo $row['gender'] ?></td>
            <td><?php echo $row['hire_date'] ?></td>
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
        </tr>

    <?php endwhile;
    mysqli_close($conn);
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
