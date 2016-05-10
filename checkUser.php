<?php
    $host = 'localhost';
    $dbname = 'howyoudoing';
    $username = 'root';
    $password = '';
    
    $isThere = false;
    
    $conn = new mysqli($host, $username, $password, $dbname);
    $sql = "SELECT * FROM users";
    
    $result = $conn->query($sql);
    
    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            if($row["name"] == $_GET["name"]){
                echo 'Bro, such user is already exists!';
                $isThere = true;
                break;
            }
        }
        
    }  else {
        echo "0 results, maybe table is empty!!!???";
    }
    
    if($isThere == false){
        echo 'Bro! No such user!';
    }
