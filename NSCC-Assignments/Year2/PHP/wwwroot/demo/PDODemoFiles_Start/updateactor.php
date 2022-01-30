<?php

    $conn = mysqli_connect("localhost", "root", "inet2005", "sakila");
    if(!$conn)
    {
        die("Unable to connect to database: " . mysqli_connect_error());
    }

    $actorId = 204;
    $sql = "SELECT first_name,last_name FROM actor WHERE actor_id = $actorId;";
    $result = mysqli_query($conn, $sql);
    if(!$result)
    {
        die("Actor with id $actorId was not found");
    }
    else
    {
        $data = mysqli_fetch_assoc($result);
        $firstName = $data['first_name'];
        $lastName = $data['last_name'];
    }

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Update actors</title>
    </head>
    <body>
        <form id="updateActor" name="updateActor" method="post" action="updateactor.php">
            <p><label>Actor Id: <input type="text" name="actorId" id="actorId" value="<?php echo $actorId; ?>" /></label></p>
            <p><label>First Name: <input type="text" name="firstName" id="firstName" value="<?php echo $firstName; ?>" /></label></p>
            <p><label>Last Name: <input type="text" name="lastName" id="lastName" value="<?php echo $lastName; ?>" /></label></p>
            <p><input type="submit" id="submit" value="update" /></p>
        </form>
        <?php
            if(!empty($_POST['actorId']) && !empty($_POST['firstName']) && !empty($_POST['lastName']))
            {
                $sql = "UPDATE actor SET first_name = '";
                $sql .= $_POST['firstName'];
                $sql .= "', last_name = '";
                $sql .= $_POST['lastName'];
                $sql .= "' WHERE actor_id = ";
                $sql .= $_POST['actorId'];
                $sql .= ";";

                $result = mysqli_query($conn, $sql);
                if(!$result)
                {
                    die("Unable to update record: " . mysqli_error($conn));
                }
                else
                {
                    echo "<h2>Success! Record was updated.</h2>";
                }
            }

        ?>
    </body>
</html>
<?php mysqli_close($conn); ?>