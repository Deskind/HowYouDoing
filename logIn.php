<?php
    $host = 'localhost';
    $database = 'howyoudoing';
    $user = 'root';
    $password = '';
    
    $country =  $_GET['country'];
    $name = $_GET['name'];
    $pwd = $_GET['password'];
    
    $conn = new mysqli($host, $user, $password, $database);
    
    $query = "select * from users where name = '$name' and password = '$pwd' and country = '$country'";
    
    $result = $conn->query($query);
    
    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            echo 'LogIn successfuly';
        }
    }  else {
        echo 'Sorri bro! Something wrong with your name, password, or maybe you are not singin yet!!!';
    }