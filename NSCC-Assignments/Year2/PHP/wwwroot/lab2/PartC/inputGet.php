<!--url http://localhost/lab2/PartC/inputGet.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Process Page for Get</title>
</head>
<body>
<h1>
    <?php

    $month = intval($_GET['month']);
    $day = intval($_GET['day']);

    switch($month) {

    }

    echo "Hello, " . $_GET['firstName'] . " " . $_GET['lastName'] . "!";
    echo "<br>";
    echo "Your zodiac sign is: ";
    switch($month) {
        case 1://jan
            if($day >= 20) {
                echo "Aquarius";
            }
            else {
                echo "Capricorn";
            }
            break;
        case 2://feb
            if($day >= 21) {
                echo "Pisces";
            }
            else {
                echo "Aquarius";
            }
            break;
        case 3://mar
            if($day >= 21) {
                echo "Aries";
            }
            else {
                echo "Pisces";
            }
            break;
        case 4://apr
            if($day >= 20) {
                echo "Taurus";
            }
            else {
                echo "Aries";
            }
            break;
        case 5://may
            if($day >= 21) {
                echo "Gemini";
            }
            else {
                echo "Pisces";
            }
            break;
        case 6://june
            if($day >= 22) {
                echo "Cancer";
            }
            else {
                echo "Gemini";
            }
            break;
        case 7://july
            if($day >= 23) {
                echo "Leo";
            }
            else {
                echo "Cancer";
            }
            break;
        case 8://aug
            if($day >= 23) {
                echo "Virgo";
            }
            else {
                echo "Leo";
            }
            break;
        case 9://sept
            if($day >= 23) {
                echo "Libra";
            }
            else {
                echo "Virgo";
            }
            break;
        case 10://oct
            if($day >= 24) {
                echo "Scorpio";
            }
            else {
                echo "Libra";
            }
            break;
        case 11://nov
            if($day >= 23) {
                echo "Sagittarius";
            }
            else {
                echo "Scorpio";
            }
            break;
        case 12://dec
            if($day >= 22) {
                echo "Capricorn";
            }
            else {
                echo "Sagittarius";
            }
            break;
    }
    ?>
</h1>
</body>
</html>