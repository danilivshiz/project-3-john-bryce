<?php 
include 'connection.php';

$stmt=$pdo->query('SELECT * FROM student');
echo "<table > <tr >
                            <th style='border: 1px solid black;text-align: center;'>student name</th>
                            <th style='border: 1px solid black;text-align: center;'>student phone</th> 
                            <th style='border: 1px solid black;text-align: center;'>student email</th> 
                            </tr>";
$result= array();

while($row= $stmt->fetch())
{
                 echo     "<tr>
                                <td style='border: 1px solid black;text-align: center;'>" . $row["name"] . "</td>
                                <td style='border: 1px solid black;text-align: center;'>" . $row["phone"] . "</td> 
                                <td style='border: 1px solid black;text-align: center;'>" . $row["email"] . "</td> 
                            </tr>";
                            }
                echo "</table>";


?>