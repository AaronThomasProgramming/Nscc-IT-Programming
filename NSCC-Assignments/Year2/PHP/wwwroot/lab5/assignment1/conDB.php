<?php
//$host = !empty($_ENV["DB_HOST"]) ?$_ENV["DB_HOST"] : "database";
//
////if(!empty($_ENV["DB_DBNAME"])) {
////    $dbname = $_ENV["DB_DBNAME"];
////} else{
////    $dbname = "employees";
////}
//
//$dbname = !empty($_ENV["DB_DBNAME"]) ?$_ENV["DB_DBNAME"] : "employees";
//
//$username = !empty($_ENV["DB_USERNAME"]) ?$_ENV["DB_USERNAME"] : "root";
//
////$dbname = $_ENV["DB_DBNAME"];
////$username = $_ENV["DB_USERNAME"];
////$password = $_ENV["DB_PASSWORD"];
//$password = !empty($_ENV["DB_PASSWORD"]) ?$_ENV["DB_PASSWORD"] : "inet2005";

function getDbConnection(){
    $host = !empty($_ENV["DB_HOST"]) ?$_ENV["DB_HOST"] : "database";
    $dbname = !empty($_ENV["DB_DBNAME"]) ?$_ENV["DB_DBNAME"] : "employees";
    $username = !empty($_ENV["DB_USERNAME"]) ?$_ENV["DB_USERNAME"] : "root";
    $password = !empty($_ENV["DB_PASSWORD"]) ?$_ENV["DB_PASSWORD"] : "inet2005";
    $dsn ="mysql:host=$host;dbname=$dbname";
    $conn = new PDO($dsn,"$username", "$password");
    return $conn;
}

?>