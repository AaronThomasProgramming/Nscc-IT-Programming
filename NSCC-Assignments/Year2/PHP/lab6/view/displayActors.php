<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Actors</title>
    <style type="text/css">
        table
        {
            border: 1px solid purple;
        }
        th, td
        {
            border: 1px solid red;
        }
    </style>
</head>
<body>
<?php
if(!empty($lastOperationResults)):
    ?>
    <h2><?php echo $lastOperationResults; ?></h2>
<?php
endif;
?>

<?php

if(isset($_POST['submit'])) {
    $search = $_POST['string'];
}
?>

<?php

?>

<form action="<?php $_SERVER['PHP_SELF'] ?>"  method="post" name="guessinggame" >
    <b>Search First & Last Names From Database</b>
    <p>Search:
        <input name="string" type="text" value="<?php if (isset($search)) echo $search; ?>">
    </p>
    <p>
        <input name="idSearch" type="submit" id="idSearch" value="submit">
    </p>
</form>

<h1>Current Actors:</h1>
<table>
    <thead>
    <tr>
        <th>Actor ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Update</th>
        <th>Delete</th>
<!--        <th>Address 1</th>-->
<!--        <th>Address 2</th>-->
    </tr>
    </thead>
    <tbody>
    <?php
    foreach($arrayOfActors as $actor):
        ?>
        <tr>
            <td><?php echo $actor->getID(); ?></td>
            <td><?php echo $actor->getFirstName(); ?></td>
            <td><?php echo $actor->getLastName(); ?></td>
            <td>
                <a href="<?php echo $_SERVER['PHP_SELF']; ?>?idUpdate=<?php echo $actor->getID(); ?>">
                    <img src="images/edit_icon.png" height="25px" width="25px"/>
                </a>
            </td>
            <td>
                <a href="<?php echo $_SERVER['PHP_SELF']; ?>?idDelete=<?php echo $actor->getID(); ?>">
                    <img src="images/edit_icon.png" height="25px" width="25px"/>
                </a>
            </td>
<!--            <td>--><?php //echo $actor->getAddress()->getAddress(); ?><!--</td>-->
<!--            <td>--><?php //echo $actor->getAddress()->getAddress2(); ?><!--</td>-->
        </tr>
    <?php
    endforeach;
    ?>
    </tbody>
    <tfoot></tfoot>
</table>
</body>
</html>
