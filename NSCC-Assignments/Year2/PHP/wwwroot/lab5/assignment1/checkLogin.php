<?php
//For MYSQL version 5.5 or later
//INSERT INTO WebUsers (user_name, user_pwd) VALUES ('mikec', SHA2('password',512));
//You need a 128 character field to store SHA2-512

//For earlier versions of MYSQL
//INSERT INTO WebUsers (user_name, user_pwd) VALUES ('mikec', SHA1('password'));
//You need a 40 character field to store SHA1

    session_start();
    ob_start();

try{
    include_once("conDB.php");
    $conn = getDbConnection();
    //set the pdo error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $username = $_POST['loginUser'];
    $pwd = $_POST['loginPwd'];
    $username = stripslashes($username);
//    $username = mysqli_real_escape_string($conn, $username);

    $stmt = $conn->prepare("SELECT * FROM WebUsers WHERE user_name = :username");
    $stmt->bindParam(":username", $username);
    $stmt->execute();

    $array= $stmt->fetchAll();
    $num_rows = $stmt->rowCount();

    echo $array ."<br>";
    echo $_SESSION['LoggedInUser'] ."<br>";
    echo $username ."<br>";

    if($num_rows == 1)
    {
        $_SESSION['LoggedInUser'] = $username;
        header('location:records.php');
    }
    else
    {
        echo "Incorrect Login<br />";
        echo "<a href='mainLogin.html'>Try again</a>";
    }

    $conn = null;
} catch (PDOException $e){
    die($e->getMessage());
}
    ob_end_flush();