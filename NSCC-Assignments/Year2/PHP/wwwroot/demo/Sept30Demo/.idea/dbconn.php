<?php
function getDbConnection(){
    $conn = mysqli_connect("database", "root", "inet2005", "sakila");
    if(!$conn)
    {
        die("Unable to connect to database: " . mysqli_connect_error());
    }
    return $conn;
}
?>
