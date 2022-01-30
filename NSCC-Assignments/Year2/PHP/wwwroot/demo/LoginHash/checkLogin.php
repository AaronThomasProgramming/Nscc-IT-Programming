<?php
//For MYSQL version 5.5 or later
//INSERT INTO WebUsers (user_name, user_pwd) VALUES ('mikec', SHA2('password',512));
//You need a 128 character field to store SHA2-512

//For earlier versions of MYSQL
//INSERT INTO WebUsers (user_name, user_pwd) VALUES ('mikec', SHA1('password'));
//You need a 40 character field to store SHA1

    session_start();
    ob_start();

//    $conn = mysqli_connect("localhost", "root", "inet2005", "sakila");
//    if(!conn)
//    {
//        die("Could not connect to the database: " + mysqli_connect_error());
//    }
    include_once("dbconn.php");

    $conn = getDbConnection();

//    $loginUser = $_POST['loginUser'];
//    $loginPwd = $_POST['loginPwd'];
//
//    $loginUser = stripslashes($loginUser);
//    $loginPwd = stripslashes($loginPwd);
//    $loginUser = mysqli_real_escape_string($conn, $loginUser);
//    $loginPwd = mysqli_real_escape_string($conn, $loginPwd);

    $username = $_POST['loginUser'];
    $pwd = $_POST['loginPwd'];

    $username = stripslashes($username);
//    $loginPwd = stripslashes($loginPwd);
    $username = mysqli_real_escape_string($conn, $username);
//    $loginPwd = mysqli_real_escape_string($conn, $loginPwd);

    //for mysql 5.5 or later
//    $hash = hash("sha512", $loginPwd);

    //for mysql versions before 5.5
    //$hash = hash("sha1", $loginPwd);

//    $sql = "SELECT * FROM sakila.WebUsers WHERE user_name = '$loginUser' AND user_pwd = '$hash'";

    $sql = "SELECT * FROM sakila.WebUsers WHERE user_name = '$username'";

    $result = mysqli_query($conn, $sql);
    if(!$result)
    {
        die("An error occurred in querying the database: " + mysqli_error($conn));
    }

    $count = mysqli_num_rows($result);

    mysqli_close($conn);

    if($count == 1)
    {
        $_SESSION['LoggedInUser'] = $username;
        header('location:page1.php');
    }
    else
    {
        echo "Incorrect Login<br />";
        echo "<a href='mainLogin.html'>Try again</a>";
    }

    ob_end_flush();