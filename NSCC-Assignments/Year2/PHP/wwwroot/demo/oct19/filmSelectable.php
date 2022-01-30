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
        <table border="1">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Language</th>
                <th></th>
            </tr>
        <?php
//            $db = mysqli_connect("localhost","root", "","sakila");
//            if (!$db)
//            {
//                    die('Could not connect to the Sakila Database: ' . mysqli_connect_error());
//            }

            try{
                $fname = "war";
                $conn = new PDO("mysql:host=database;dbname=sakila", "root", "inet2005");
                //set the pdo error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $stmt = $conn->prepare("Select employees.emp_no, employees.birth_date, employees.first_name, employees.last_name from employees.employees 
where first_name like :fname or last_name like :fname  limit 0, 20");
                $fname = "%$fname%";
                $stmt->bindParam(":fname", $fname);
                $stmt->execute();

                $array= $stmt->fetchAll();

                echo $array;
//                foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
//                    echo $v;
//                }

                foreach ($array as $row){
                    echo "<tr>";
                    echo "<td>" . $row['birth_date'] . "</td>";
                    echo "<td>". $row['first_name'] . "</td>";
                    echo "<td>". $row['last_name'] . "</td>";
                    ?>
                    <td>
                        <form name="selectForm" action="selectedFilm.php" method="POST">
                            <input type="hidden" name="filmID" value="<?php echo $row['film_id']; ?>" />
                            <input type="submit" name="selectButton" value="Select" />
                        </form>
                    </td>
                    <?php
                    echo "</tr>";
                }

                $conn = null;
            } catch (PDOException $e){
                die($e->getMessage());
            }

//            $sql = "SELECT film.film_id,film.title,film.description,language.name";
//            $sql .= " FROM film INNER JOIN language";
//            $sql .= " ON film.language_id=language.language_id";
//            $sql .= " LIMIT 0,10;";
//
//            $result = mysqli_query($db,$sql);
//            if(!$result)
//            {
//                    die('Could not retrieve records from the Sakila Database: ' . mysqli_error($db));
//            }

//
//            while ($row = mysqli_fetch_assoc($result))
//            {
//                    echo "<tr>";
//                    echo "<td>" . $row['title'] . "</td>";
//                    echo "<td>". $row['description'] . "</td>";
//                    echo "<td>". $row['name'] . "</td>";
//        ?>
<!--                    <td>-->
<!--                        <form name="selectForm" action="selectedFilm.php" method="POST">-->
<!--                            <input type="hidden" name="filmID" value="--><?php //echo $row['film_id']; ?><!--" />-->
<!--                            <input type="submit" name="selectButton" value="Select" />-->
<!--                        </form>-->
<!--                    </td>-->
<!--        --><?php
//                    echo "</tr>";
//            }
//
//            mysqli_close($db);
//        ?>
        </table>
    </body>
</html>
