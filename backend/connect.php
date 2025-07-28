<?php
    require './config.php';
    try{
        $con=new PDO("mysql:host=$host;dbname=$bdname;charset=utf8",$username,$password);
        $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        die("erreur de connection:" . $e->getMessage());
    }
?>
