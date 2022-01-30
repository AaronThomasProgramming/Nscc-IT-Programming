<!DOCTYPE html>
<html>
    <head>
        <title>Add new actors</title>
    </head>
    <body>
        <form id="newActor" name="newActor" method="post" action="addactor.php">
            <p><label>First Name: <input type="text" name="firstName" id="firstName" /></label></p>
            <p><label>Last Name: <input type="text" name="lastName" id="lastName" /></label></p>
            <p><input type="submit" id="submit" value="submit" /></p>
        </form>
        <?php
            if(!empty($_POST['firstName']) && !empty($_POST['lastName']))
            {
                require_once("dbconn.php");
                $conn = getDbConnection();
//                $conn = mysqli_connect("database", "root", "inet2005", "sakila");
//                if(!$conn)
//                {
//                    die("Unable to connect to database: " . mysqli_connect_error());
//                }

                $sql = "INSERT INTO actor (first_name, last_name) VALUES ('";
                $sql .= $_POST['firstName'];
                $sql .= "','";
                $sql .= $_POST['lastName'];
                $sql .= "');";

                $result = mysqli_query($conn, $sql);
                if(!$result)
                {
                    die("Unable to insert record: " . mysqli_error($conn));
                }
                else
                {
                    echo "<h2>Success! Record was entered.</h2>";
                }

                mysqli_close($conn);
            }

        ?>
    </body>
</html>