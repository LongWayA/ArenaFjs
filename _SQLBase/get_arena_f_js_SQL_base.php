    <?php
    
        // Copyright (c) 2019, Brenkman Andrey and/or its affiliates. All rights reserved.
        // -070618-071219- 

        $nameClient = $_GET["name"];
        $nameClient = htmlspecialchars($nameClient);
        
        $nameClientStr = '<br>nameClient = ' . $nameClient . '<br>';
        //echo $nameClientStr;
      if (strcmp($nameClient, "requests_arena_f_js") == 0){
             // Выражение include включает и выполняет указанный файл.
             include 'arena_f_js_SQL_base.php';
             //echo "конец запроса";
       }//
    ?>

