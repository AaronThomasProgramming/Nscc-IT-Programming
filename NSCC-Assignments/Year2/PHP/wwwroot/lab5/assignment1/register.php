<!-- url http://localhost/lab5/assignment1/register.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Add user</title>
</head>
<body>
<form id="newUser" name="newUser" method="post" action="register.php">
    <p><label>Username: <input type="text" name="username" id="username" /></label></p>
    <p><label>Password: <input type="text" name="pwd" id="pwd" /></label></p>
    <p><input type="submit" id="submit" value="submit" /></p>
</form>
<?php
if(!empty($_POST['username']) && !empty($_POST['pwd']))
{
    try{
// Given password
        $password = $_POST['pwd'];

// Validate password strength
        $uppercase = preg_match('@[A-Z]@', $password);
        $lowercase = preg_match('@[a-z]@', $password);
        $number    = preg_match('@[0-9]@', $password);
        $specialChars = preg_match('@[^\w]@', $password);

        if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($password) < 8) {
            echo 'Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
        }else {
            echo 'Strong password.<br>';
            //encrypt pwd
            $encryptPwd = password_hash('password', PASSWORD_DEFAULT);
            //ATTEMPT TO CONNECT TO DATABASE
            include_once("conDB.php");
            $conn = getDbConnection();
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            //BUILD OUR QUERY/STATEMENT WITH PREPARE STATEMENTS
            $stmt = $conn->prepare("INSERT INTO WebUsers (user_name, user_pwd) VALUES (:username, :pwd);");

            $stmt->bindParam(":username", $_POST['username']);
            $stmt->bindParam(":pwd", $encryptPwd);

            //EXECUTE THE STATEMENT
            $stmt->execute();

            echo "Success!: " . $stmt->rowCount() . " row(s) entered<br>";
            echo $_POST['username']."<br>";
            echo $encryptPwd."<br>";
        }
    } catch (PDOException $ex){
        die($ex->getMessage());
    } finally {
        //close the connection
        $conn = null;
    }

}

?>
</body>
</html>