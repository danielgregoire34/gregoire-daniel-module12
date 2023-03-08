DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;
USE tracker_db;

CREATE TABLE employee (

id INT NOT NULL AUTO_INCREMENT,

first_name VARCHAR(30) NOT NULL,

last_name VARCHAR(30) NOT NULL,

title VARCHAR(30) NOT NULL,

department VARCHAR(30) NOT NULL,

salary INT,

manager VARCHAR(30) NOT NULL,

PRIMARY KEY (id)

);