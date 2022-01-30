<!DOCTYPE html>
<html>
    <head>
        <title>Delete actors</title>
    </head>
    <body>
        <form id="deleteActor" name="deleteActor" method="post" action="deleteactor.php">
            <p><label>Actor Id: <input type="text" name="actorId" id="actorId" /></label></p>
            <p><input type="submit" id="submit" value="delete" /></p>
        </form>
        <?php
            if(!empty($_POST['actorId']))
            {
                require_once("dbconn.php");
                $conn = getDbConnection();
//                $conn = mysqli_connect("database", "root", "inet2005", "sakila");
//                if(!$conn)
//                {
//                    die("Unable to connect to database: " . mysqli_connect_error());
//                }

                $sql = "DELETE FROM actor WHERE actor_id = ";
                $sql .= $_POST['actorId'];
                $sql .= ";";

                $total_affected_rows=mysqli_affected_rows($conn);

                $result = mysqli_query($conn, $sql);
                if(!$result)
                {
                    die("Unable to delete record: " . mysqli_error($conn));
                }
                else
                {
                    echo "<h2>Successfully deleted $total_affected_rows record(s)</h2>";
                }

                mysqli_close($conn);
            }

        ?>
    </body>
</html>