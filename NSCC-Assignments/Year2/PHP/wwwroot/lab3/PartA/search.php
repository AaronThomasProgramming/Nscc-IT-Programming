<!-- url http://localhost/lab3/PartA/search.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Film list</title>
    <style>
        table, th, tr, td { border: solid 2px black;}
    </style>
</head>
<body>

<form action="<?php $_SERVER['PHP_SELF'] ?>"  method="post" name="guessinggame">
    <p>Search:
        <input name="string" type="text">
    </p>
    <p>
        <input name="Submit Query" type="submit" value="Submit Query">
    </p>
</form>
<table>
    <thead>
    <th>Title</th>
    <th>Description</th>
    </thead>
    <tbody>
    <?php



    $input = $_POST['string'];


    include_once("dbconn.php");
    //                require_once("dbconn.php");
    $conn = getDbConnection();

    $result = mysqli_query($conn,"SELECT * FROM film where description like '%$input%'");
    if(!$result)
    {
        die("Could not retrieve records from database: " . mysqli_error($conn));
    }

    while($row = mysqli_fetch_assoc($result)):

        ?>
        <tr>
            <td><?php echo $row['title'] ?></td>
            <td><?php echo $row['description'] ?></td>
        </tr>

    <?php endwhile;
    mysqli_close($conn);
    ?>
    </tbody>
</table>
<!--<form action="--><?php //$_SERVER['PHP_SELF'] ?><!--"  method="post" name="guessinggame">-->
<!--    <p>Search:-->
<!--        <input name="string" type="text">-->
<!--    </p>-->
<!--    <p>-->
<!--        <input name="Submit Query" type="submit" value="Submit Query">-->
<!--    </p>-->
<!--</form>-->
</body>
</html>

