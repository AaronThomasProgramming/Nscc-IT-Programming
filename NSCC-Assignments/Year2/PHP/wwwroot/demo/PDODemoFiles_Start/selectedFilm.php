<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            // put your code here
            if(!empty($_POST['filmID']))
            {
                echo "<h1>Your selected film was:" . $_POST['filmID'] . "!</h1>";
            }
        ?>
        <a href="filmSelectable.php">Go Back</a>
    </body>
</html>
