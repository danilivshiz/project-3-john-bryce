<?php 
include 'connection.php';   


$name = ($_GET['name']);
$description = ($_GET['description']);

echo $name." was added to the courses";
$stmt = $pdo->exec("INSERT INTO course (name,description)
                    VALUES('$name','$description')");


$result = array();




?>