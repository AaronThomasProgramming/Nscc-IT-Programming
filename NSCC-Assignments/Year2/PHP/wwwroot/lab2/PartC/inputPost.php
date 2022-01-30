<!--url http://localhost/lab2/PartC/inputPost.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Process Page Input Post</title>
</head>
<body>
<h1>
    <?php
    $feet = intval($_POST['heightFeet']);
    $inch = intval($_POST['heightInches']);
    $feetToM = $feet / 3.28;
    $inchToM = $inch * 0.0254;
    $meters = $feetToM + $inchToM;

    $fileTmpName = $_FILES['userFile']['tmp_name'];
    $fileOrigName = $_FILES['userFile']['name'];
    $fileSize = $_FILES['userFile']['size'];
    $fileUploadError = $_FILES['userFile']['error'];



    echo "Your first name is: " . $_POST['firstName'];
    echo "<br>";
    echo "Your last name is: " . $_POST['lastName'];
    echo "<br>";
    echo "Your height in meters is: " . round($meters, 2);
    echo "<br>";
    if($result = move_uploaded_file($fileTmpName,"uploads/".$fileOrigName)) {
        echo "Upload successful";
    }
    ?>
</h1>
</body>
</html>