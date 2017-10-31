<?php 
include 'connection.php';

$stmt=$pdo->query('SELECT * FROM course');
echo "<table > <tr >
                            <th style='border: 1px solid black;text-align: center;'>Course id</th>
                            <th style='border: 1px solid black;text-align: center;'>Course name</th> 
                           
                            </tr>";
$result= array();

while($row= $stmt->fetch())
{
                 echo     "<tr>
                                <td style='border: 1px solid black;text-align: center;'>" . $row["idCourse"] . "</td>
                                <td style='border: 1px solid black;text-align: center;'>" . $row["name"] . "</td> 
                               
                            </tr>";
                            }
                echo "</table>";


?>