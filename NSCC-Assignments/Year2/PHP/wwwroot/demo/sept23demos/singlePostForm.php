<!--url http://localhost/demo/sept23demos/singlePostForm.php -->
<!DOCTYPE html>
<html>
    <head>
        <title>Single post form (all-in-one)</title>
    </head>
    <body>
        <h1>
        <?php
            $firstName = '';
            $lastName = '';
            if(!empty($_POST['firstName']) && !empty($_POST['lastName'])) {
                $firstName = $_POST['firstName'];
                $lastName = $_POST['lastName'];
                echo "Hello, " . $_POST['firstName'] . " " . $_POST['lastName'];
            }
        ?>
        </h1>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <p>First Name: <input type="text" name="firstName" value="<?php echo $firstName; ?>" /></p>
            <p>Last Name: <input type="text" name="lastName" value="<?php echo $lastName; ?>" /></p>
            <p><input type="submit" name="Submit" value="Send Form" /></p>
        </form>
    </body>
</html>