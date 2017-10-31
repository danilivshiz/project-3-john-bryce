<?php
    require_once 'connectionMysql.php';
    $con1 = new Connection();
    
     $results = $con1->select('student');
    $resultsCount = $results->rowCount();

        
        
    $i = 0;
    echo "[";
    while ($row = $results->fetch())
    {
        echo "{";

        echo  '"name":';
        echo '"';
        echo $row["name"];
        echo '"';
        echo ",";

        echo '"phone":';
        echo '"';
        echo $row['phone'];
        echo '"';
        echo ",";

         echo '"email":';
        echo '"';
        echo $row['email'];
        echo '"';
        echo ",";
      

        echo "}";
        if ($resultsCount -1> $i)
            echo ",";
        $i++;
    }

    echo "]";



?>
