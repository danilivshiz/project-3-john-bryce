<?php
include 'connection.php';
$id = intval($_GET['id']);

$stmt = $pdo->query('SELECT * FROM administrator WHERE idAdministrator = '.$id);

$result = array();

while ($row = $stmt->fetch())
{
    $result[]=$row;
}
if ( count($result)== 0 ){
     echo 'no result ';
}
$stmt = $pdo->exec('DELETE FROM administrator WHERE idAdministrator = '.$id);

echo 'administrator number id: ' .$id .' deleted'; 
?>