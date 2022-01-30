<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

require_once '../model/data/iActorDataModel.php'; //interface file must be included

class PDOMySQLActorDataModel implements iActorDataModel
{
    private $dbConnection; //<-the db connection is stored here after successful connection
    private $result; //<-results of queries are stored here
    private $stmt;

    // because the class implements the iCustomerDataModel interface,
    // the class MUST implement all of the functions defined in the
    // interface...they are listed below

    public function connectToDB()
    {
        try
        {
            //connects to mysql db via PDO
            //if connection is successful, the resulting connection
            //is stored in the $dbConnection member variable defined above
            $this->dbConnection = new PDO("mysql:host=database;dbname=sakila","root","inet2005");
            $this->dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $ex)
        {
            die('Could not connect to the Sakila Database via PDO: ' . $ex->getMessage());
        }
    }

    public function closeDB()
    {
        // set a PDO connection object to null to close it
        $this->dbConnection = null;
    }

    //executes a select statement query to get all of the customers
    //from the db....including related address data (via joins)
    public function selectActors() //reuse for search
    {
        // hard-coding for first ten rows
        $start = 0;
        $count = 10;

        //build the SQL STATEMENT
        //notice the placeholders for the start and count
        $selectStatement = "SELECT * FROM actor ";
//        $selectStatement .= " LEFT JOIN address ON customer.address_id = address.address_id";
        $selectStatement .= " LIMIT :start,:count;";

        try
        {
            //prepare the select statement by inserting the two values
            //into the parameters/placeholders
            $this->stmt = $this->dbConnection->prepare($selectStatement );
            $this->stmt->bindParam(':start', $start, PDO::PARAM_INT);
            $this->stmt->bindParam(':count', $count, PDO::PARAM_INT);
//            $this->stmt->bindParam(':sSearch', $sActor, PDO::PARAM_STR);
            //execute the select statement and store it in the $stmt
            //member variable
            $this->stmt->execute();
        }
        catch(PDOException $ex)
        {
            die('Could not select records from Sakila Database via PDO: ' . $ex->getMessage());
        }

    }

    public function selectActorById($actorID)
    {
        //build select statment with WHERE clause to get
        //specific customer from db
        //note the :custID parameter placeholder...this is PDO-specific
        $selectStatement = "SELECT * FROM actor";
//        $selectStatement .= " LEFT JOIN address ON customer.address_id = address.address_id";
        $selectStatement .= " WHERE actor.actor_id = :actorID;";

        try
        {
            //prepare the statement by inserting in the customer id
            //that was passed into the function
            $this->stmt = $this->dbConnection->prepare($selectStatement);
            $this->stmt->bindParam(':actorID', $actorID, PDO::PARAM_INT);
            //execute the select statement and store in $stmt member variable
            $this->stmt->execute();
        }
        catch(PDOException $ex)
        {
            die('Could not select records from Sakila Database via PDO: ' . $ex->getMessage());
        }
    }

    public function fetchActor()
    {
        //at this point....a query should have been executed and stored
        //in the $stmt variable. here we can fetch the results
        //row by row by calling the fetch method off of the statement
        try
        {
            //this returns one row of data if there is one
            $this->result = $this->stmt->fetch(PDO::FETCH_ASSOC);
            return $this->result;
        }
        catch(PDOException $ex)
        {
            die('Could not retrieve from Sakila Database via PDO: ' . $ex->getMessage());
        }
    }


    public function updateActor($actorID,$first_name,$last_name)
    {
        //build an UPDATE sql statment with the data provided to the function
        //this should always include the customer id
        //note the parameters/placeholders in the statement
        $updateStatement = "UPDATE actor";
        $updateStatement .= " SET first_name = :firstName,last_name=:lastName";
        $updateStatement .= " WHERE actor_id = :actorID;";

        try
        {
            //prepare the sql statement by inserting into the
            //placeholders the values that we wish to use to perform
            //the update
            $this->stmt = $this->dbConnection->prepare($updateStatement);
            $this->stmt->bindParam(':firstName', $first_name, PDO::PARAM_STR);
            $this->stmt->bindParam(':lastName', $last_name, PDO::PARAM_STR);
            $this->stmt->bindParam(':actorID', $actorID, PDO::PARAM_INT);
            //perform the update statement and store in the $stmt member variable
            $this->stmt->execute();
            //return the number of rows that the update statement
            //affected - if successful in this case, the value returned should
            //be 1 - it could possibly return 0 if no rows were affected
            return $this->stmt->rowCount();
        }
        catch(PDOException $ex)
        {
            die('Could not select records from Sakila Database via PDO: ' . $ex->getMessage());
        }
    }

    public function deleteActor($actorID)
    {
//        $sql = "DELETE FROM employees.employees WHERE emp_no = ";
//        $sql .= $_POST['empNum'];
//        $sql .= ";";
//        $deleteStatement = "Delete From sakila.actor WHERE actor_id = :actorID";
        $deleteStatement = "delete sakila.film_actor from sakila.film_actor inner join actor a on film_actor.actor_id = a.actor_id
where a.actor_id = :actorID;
delete from sakila.actor where actor_id = :actorID;";

//        $deleteStatement .= " WHERE actor_id = :actorID and first_name = :firstName and last_name = :lastName;";

        try
        {
            include_once("conDB.php");
            $conn = getDbConnection();
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            //prepare the sql statement by inserting into the
            //placeholders the values that we wish to use to perform
            //the update
            $stmt = $this->dbConnection->prepare($deleteStatement);
//            $this->stmt->bindParam(':firstName', $first_name, PDO::PARAM_STR);
//            $this->stmt->bindParam(':lastName', $last_name, PDO::PARAM_STR);
            $stmt->bindParam(':actorID', $actorID);
            //perform the update statement and store in the $stmt member variable
            $stmt->execute();
            //return the number of rows that the update statement
            //affected - if successful in this case, the value returned should
            //be 1 - it could possibly return 0 if no rows were affected
            return $stmt->rowCount();
        }
        catch(PDOException $ex)
        {
            die('Could not select records from Sakila Database via PDO: ' . $ex->getMessage());
        }
    }

//    public function actorSearch($search)
//    {
//        // hard-coding for first ten rows
//        $start = 0;
//        $count = 10;
//
//        //build the SQL STATEMENT
//        //notice the placeholders for the start and count
//        $selectStatement = "SELECT * FROM actor where first_name like :sSearch or last_name like :sSearch";
////        $selectStatement .= " LEFT JOIN address ON customer.address_id = address.address_id";
////        $selectStatement .= " LIMIT :start,:count;";
//
//        try
//        {
//            //prepare the select statement by inserting the two values
//            //into the parameters/placeholders
//            $this->stmt = $this->dbConnection->prepare($selectStatement);
//            $this->stmt->bindParam(':sSearch', $search, PDO::PARAM_STR);
////            $this->stmt->bindParam(':start', $start, PDO::PARAM_INT);
////            $this->stmt->bindParam(':count', $count, PDO::PARAM_INT);
//            //execute the select statement and store it in the $stmt
//            //member variable
//            $this->stmt->execute();
//        }
//        catch(PDOException $ex)
//        {
//            die('Could not select records from Sakila Database via PDO: ' . $ex->getMessage());
//        }
//        // TODO: Implement searchActor() method.
//    }

//    public function fetchActorSearch($row)
//    {
//        //extract the specific customer id from the appropriate
//        //column with the current row of customer data you are focused on
//        return $row['actor_search'];
//    }

    public function fetchActorID($row)
    {
        //extract the specific customer id from the appropriate
        //column with the current row of customer data you are focused on
        return $row['actor_id'];
    }

    public function fetchActorFirstName($row)
    {
        //extract the specific first name from the appropriate
        //column with the current row of customer data you are focused on
        return $row['first_name'];
    }

    public function fetchActorLastName($row)
    {
        //extract the specific last name from the appropriate
        //column with the current row of customer data you are focused on
        return $row['last_name'];
    }


    public function fetchAddressID($row)
    {
        //extract the specific related address id from the appropriate
        //column with the current row of customer data you are focused on
        return $row['address_id'];
    }

    public function fetchAddress1($row)
    {
        //extract the specific related address 1 data from the appropriate
        //column with the current row of customer data you are focused on
        return $row['address'];
    }

    public function fetchAddress2($row)
    {
        //extract the specific related address 2 data from the appropriate
        //column with the current row of customer data you are focused on
        return $row['address2'];
    }

    public function selectSearchActors($sString)
    {
        // TODO: Implement selectActors() method.
        // hard-coding for first ten rows
        $start = 0;
        $count = 10;

        $sString = "%J%";
        //$sString = "%$sString%";

        //build the SQL STATEMENT
        //notice the placeholders for the start and count
        $selectStatement = "SELECT * FROM sakila.actor  where first_name like :sString or last_name like :sString";
        //$selectStatement = "SELECT * FROM main.Actors where first_name like '%SQ%' ";
//        $selectStatement .= " LEFT JOIN address ON customer.address_id = address.address_id";
        $selectStatement .= " LIMIT :start,:count;"; //OFFSET :start;";

        try
        {
            //prepare the select statement by inserting the two values
            //into the parameters/placeholders
            $this->stmt = $this->dbConnection->prepare($selectStatement );
            $this->stmt->bindParam(':start', $start, PDO::PARAM_INT);
            $this->stmt->bindParam(':count', $count, PDO::PARAM_INT);
            $this->stmt->bindValue(":sString", '%'.$sString.'%');
//            $this->stmt->bindParam(':sSearch', $sActor, PDO::PARAM_STR);
            //execute the select statement and store it in the $stmt
            //member variable
            $this->stmt->execute();
        }
        catch(PDOException $ex)
        {
            die('Could not select records from Sakila Database via PDO: ' . $ex->getMessage());
        }
    }
}