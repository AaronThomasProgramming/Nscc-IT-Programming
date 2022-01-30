<!-- http://localhost/lab4/index.php -->
<?php

//class Shape{
//
//}
if(isset($_POST['submit'])) {
    $sRadius = $_POST['radius'];

    $sLength = $_POST['length'];
    $sWidth = $_POST['width'];

    $sBase = $_POST['base'];
    $sHeight = $_POST['height'];

    $sResize = $_POST['resize'];
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!--    <script src="index.js" type="text/javascript"></script>-->
</head>
<body>
<h1>Lab4</h1>
<form id="myForm" name="myForm" method="post" action="index.php" >

    <b>Circle</b>
    <p><label>Radius <input type="text" name="radius" id="radius" value="<?php if (isset($sRadius)) echo $sRadius; ?>"</label></p>

    <b>Square</b>
    <p><label>Length  <input type="text" name="length" id="length" value="<?php if (isset($sLength)) echo $sLength; ?>"</label>
        <label>Width  <input type="text" name="width" id="with" value="<?php if (isset($sWidth)) echo $sWidth; ?>"</label></p>

    <b>Triangle</b>
    <p><label>Base  <input type="text" name="base" id="base" value="<?php if (isset($sBase)) echo $sBase; ?>"</label>
        <label>Height  <input type="text" name="height" id="height" value="<?php if (isset($sHeight)) echo $sHeight; ?>"</label></p>

    <b>Resize</b>
    <p><label>Percentage <input type="text" name="resize" id="resize" value="<?php if (isset($sResize)) echo $sResize; ?>"</label></p>

    <p><label><input type="submit" name="submit" id="submit" value="Calculate"> </label></p>
</form>
</body>
</html>
<?php
if(!empty($_POST['radius']) && !empty($_POST['length'])&& !empty($_POST['width'])&& !empty($_POST['base'])
&& !empty($_POST['height'])) {

    $radius = $_POST['radius'];

    $length = $_POST['length'];
    $width = $_POST['width'];

    $base = $_POST['base'];
    $height = $_POST['height'];

    $resize = $_POST['resize'];

    include_once("Rectangle.php");
    $myRectangle = new Rectangle("Rectangle", $length, $width, $resize);

    echo "Results";
    echo "<h1>Shape ".$myRectangle->getName()."</h1>";
    echo "<h1>Area " . $myRectangle->calculate() . "</h1>";

    include_once("Triangle.php");
    $myTriangle = new Triangle("Triangle", $base, $height, $resize);
    echo "<h1>Shape ".$myTriangle->getName()."</h1>";
    echo "<h1>Area " . $myTriangle->calculate() . "</h1>";

    include_once("Circle.php");
    $myCircle = new Circle("Circle", $radius, $height,$resize );
    echo "<h1>Shape ".$myCircle->getName()."</h1>";
    echo "<h1>Area " . $myCircle->calculate() . "</h1>";


}
?>




























