<?php
    require_once 'connectionMysql.php';
    $con1 = new Connection();
    $results = $con1->select('course');
     $results2 = $con1->select('student');
    $resultsCount = $results->rowCount();
    $resultsCount2 = $results2->rowCount();
        
        
    $i = 0;
    echo "[";
    while ($row = $results->fetch())
    {
        echo "{";

        echo  '"idCourse":';
        echo '"';
        echo $row["idCourse"];
        echo '"';
        echo ",";

        echo '"Course_name":';
        echo '"';
        echo $row['name'];
        echo '"';
        echo ",";

      

        echo "}";
        if ($resultsCount -1> $i)
            echo ",";
        $i++;
    }

    echo "]";


 $i = 0;
    echo "[";
    while ($row = $results2->fetch())
    {
        echo "{";

          echo '"student ":';
        echo '"';
        echo $row['idstudent'];
        echo '"';
        echo ",";

            echo '"student name ":';
        echo '"';
        echo $row['name'];
        echo '"';
        echo ",";

              echo "}";
        if ($resultsCount2 -1> $i)
            echo ",";
        $i++;
    }

    echo "]";
?>
