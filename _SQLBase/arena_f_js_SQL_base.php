
<?php

// Copyright (c) 2019, Brenkman Andrey and/or its affiliates. All rights reserved.
// -070618-071219-240321- 

//echo "start SQL_base_2_ <br>";

  // $adress_Unix, $adress_Win, $port_Win, $name_database, $name_user_1, $password_user_1
  include '/home/alphagam/php/_SQL_secret/_persona_SQL_base.php';

  // пытаемся подключиться к базе
  $mysqli = new mysqli($adress_Unix, $name_user_1, $password_user_1, $name_database);
  if ($mysqli->connect_errno) {
echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }
  
  // пытаемся выполнить запрос
  // выбрать столбец визитеров из таблицы статистика визитеров
  $query = 'SELECT requests_arena_f_js FROM StatisticsVisitors';
  
  $result = $mysqli->query($query, MYSQLI_STORE_RESULT);//
  
  $result->data_seek(0);// Переход к строке 0
  $row = $result->fetch_assoc();// Извлекает результирующий ряд в виде ассоциативного массива
  $visitors_1 = $row["requests_arena_f_js"];
//echo '  $visitors_1  = ' .  $visitors_1  . '<br>';
echo $visitors_1;
  
  
  //$query2 = 'UPDATE StatisticsVisitors SET requests_arena_f_js = 0 WHERE id_StatisticsVisitors = 1' ;
  $query2 = 'UPDATE StatisticsVisitors SET requests_arena_f_js = requests_arena_f_js + 1 WHERE id_StatisticsVisitors = 1' ;
  
  // пытаемся выполнить запрос
  $result2 = $mysqli->query($query2, MYSQLI_STORE_RESULT);//
  
  $result->free();// free result
  
  $mysqli->close();// close connection

  //echo "end SQL_base_2 <br>";
  
?>




