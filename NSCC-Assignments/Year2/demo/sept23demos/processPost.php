<!--url http://localhost/demo/sept23demos/processPost.php -->
<!DOCTYPE html>
<html>
    <head>
        <title>Process Page for Post</title>
    </head>
    <body>
        <h1>
        <?php
            echo "Hello, " . $_POST['firstName'] . " " . $_POST['lastName'];
        ?>
        </h1>
    </body>
</html>