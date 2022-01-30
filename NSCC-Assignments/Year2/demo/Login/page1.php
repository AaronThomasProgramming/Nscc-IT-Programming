<?php
    require('isLoggedIn.php');
    checkIfLoggedIn();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Enter title here</title>
    </head>
    <body>
        <form name="LogoutForm" action="logOut.php" method="post">
            <input type="submit" name="logoutButton" value="Log Out" />
        </form>
        <h1>First Secured Page</h1>
        <a href="page2.php">Go to second page</a>
    </body>
</html>