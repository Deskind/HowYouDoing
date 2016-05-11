<?php
    $host = 'localhost';
    $database = 'howyoudoing';
    $user = 'root';
    $password = '';
    
    $country =  $_GET['country'];
    $name = $_GET['name'];
    $pwd = $_GET['password'];
    
    $conn = new mysqli($host, $user, $password, $database);
    
    $signInUserQuery = "insert into users (name, password, country) values ('$name', '$pwd', '$country')";
    $isThereUser = "select * from users where name = '$name' && country = '$country'";
    
    $isThereUserResutl = $conn->query($isThereUser);
    
    if($isThereUserResutl->num_rows == 0){
        $conn->query($signInUserQuery);
        echo 'Hello '.$name.'!!!';
    }  else {
        echo 'Sorry Bro!!! Such user is already exists!!!';
    }
