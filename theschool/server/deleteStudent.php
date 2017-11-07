<?php
include 'connection.php';
$id = intval($_GET['id']);

$stmt = $pdo->query('SELECT * FROM student WHERE idstudent = '.$id);

$result = array();

while ($row = $stmt->fetch())
{
    $result[]=$row;
}
if ( count($result)== 0 ){
     echo 'no result ';
}
$stmt = $pdo->exec('DELETE FROM student WHERE idstudent = '.$id);

echo 'student number id: ' .$id .' deleted'; 
?>