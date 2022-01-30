<!--url http://localhost/lab2/PartA/Step4Part2.php -->
<?php
    $version = phpversion();
    $zend = zend_version();
    $mineType = ini_get("max_execution_time");
//    echo $version;
    echo "<h1>This page was rendered in PHP version $version</h1>";
    echo "<h1>The ZEND version is $zend</h1>";
    echo "<h1>The ZEND version is $zend</h1>";
    echo "<h1>The default_typetype is $mineType</h1>";

?>
