<?php 
include 'connection.php';   


$name = ($_GET['name']);
$phone = ($_GET['phone']);
$email = ($_GET['email']);
$role = ($_GET['role']);

echo $name." was added to the administrator";
$stmt = $pdo->exec("INSERT INTO administrator (name,phone,email,role)
                    VALUES('$name','$phone','$email','$role')");


$result = array();




?>