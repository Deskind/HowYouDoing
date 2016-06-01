
create database if not exists howyoudoing;

use howyoudoing;

CREATE TABLE if not exists users(
id INT(6)  AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL,
country VARCHAR(50)
);


