<?php
    $host = 'localhost';
    $dbname = 'howyoudoing';
    $username = 'root';
    $password = '';
    
    try {
        $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    } catch (PDOException $pe) {
        echo $pe->getMessage();
    }
    
    $country =  $_GET['country'];
    $name = $_GET['name'];
    $password = $_GET['password'];
    
    $signInUserQuery = "insert into users (name, password, country) values ('$name', '$password', '$country')";
    $conn->exec($signInUserQuery);
    echo "Hello $name";
