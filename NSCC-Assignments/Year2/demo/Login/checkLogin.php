<?php
    session_start();
    ob_start();

    include_once("dbconn.php");

    $conn = getDbConnection();

    $loginUser = $_POST['loginUser'];
    $loginPwd = $_POST['loginPwd'];

    //sanitize/neutralize -> sql injection
    $loginUser = stripslashes($loginUser);
    $loginPwd = stripslashes($loginPwd);
    $loginUser = mysqli_real_escape_string($conn, $loginUser);
    $loginPwd = mysqli_real_escape_string($conn, $loginPwd);

    //check if a record exists with the user and pwd entered
    $sql = "SELECT * FROM sakila.WebUsers WHERE user_name = '$loginUser' AND user_pwd = '$loginPwd'";

    $result = mysqli_query($conn, $sql);
    if(!$result)
    {
        die("An error occurred in querying the database: " + mysqli_error($conn));
    }

    $count = mysqli_num_rows($result);

    mysqli_close($conn);

    if($count == 1)
    {
        //successful login
        $_SESSION['LoggedInUser'] = $loginUser;
        //redirect to the first secured page
        header('location:page1.php');
    }
    else
    {
        echo "Incorrect Login<br />";
        echo "<a href='mainLogin.html'>Try again</a>";
    }

    ob_end_flush();