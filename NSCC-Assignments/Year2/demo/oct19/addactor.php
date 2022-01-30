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
                try{

                    //ATTEMPT TO CONNECT TO DATABASE
                    $conn = new PDO("mysql:host=database;dbname=sakila", "sakilaApp", "inet2005");
                    // set the PDO error mode to exception
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                    //BUILD OUR QUERY/STATEMENT WITH PREPARE STATEMENTS
                    $stmt = $conn->prepare("INSERT INTO actor (first_name, last_name) VALUES (:firstName, :lastName);");
                    $stmt->bindParam(":firstName", $_POST['firstName']);
                    $stmt->bindParam(":lastName", $_POST['lastName']);

                    //EXECUTE THE STATEMENT/stored proc
                    $stmt->execute();




                    echo "Success!: " . $stmt->rowCount() . " row(s) entered";

                } catch (PDOException $ex){
                    die($ex->getMessage());
                } finally {
                    //close the connection
                    $conn = null;
                }



//                $conn = mysqli_connect("database", "root", "inet2005", "sakila");
//                if(!$conn)
//                {
//                    die("Unable to connect to database: " . mysqli_connect_error());
//                }

//                $sql = "INSERT INTO actor (first_name, last_name) VALUES ('";
//                $sql .= $_POST['firstName'];
//                $sql .= "','";
//                $sql .= $_POST['lastName'];
//                $sql .= "');";
//
//                $result = mysqli_query($conn, $sql);
//                if(!$result)
//                {
//                    die("Unable to insert record: " . mysqli_error($conn));
//                }
//                else
//                {
//                    echo "<h2>Success! Record was entered.</h2>";
//                }
//
//                mysqli_close($conn);
            }

        ?>
    </body>
</html>