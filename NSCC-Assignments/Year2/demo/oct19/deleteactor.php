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
                try{

                    //ATTEMPT TO CONNECT TO DATABASE
                    $conn = new PDO("mysql:host=database;dbname=sakila", "root", "inet2005");
                    // set the PDO error mode to exception
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                    //BUILD OUR QUERY/STATEMENT WITH PREPARE STATEMENTS
                    $stmt = $conn->prepare("CALL deleteActor(:actorId);");//exe proc
                    $stmt->bindParam(":actorId", $_POST['actorId']);

                    //EXECUTE THE STATEMENT
                    $stmt->execute();


                    echo "Success!: " . $stmt->rowCount() . " row(s) deleted";

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