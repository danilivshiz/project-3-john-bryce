<?php 
include 'connection.php';   


$name = ($_GET['name']);
$phone = ($_GET['phone']);
$email = ($_GET['email']);

echo $name." was added to the students";
$stmt = $pdo->exec("INSERT INTO student (name,phone,email)
                    VALUES('$name','$phone','$email')");


$result = array();




?>