CREATE DATABASE pizza_db;
USE pizza_db;

CREATE TABLE pizzas
(
id INT NOT NULL AUTO_INCREMENT,
flavor VARCHAR(255) NOT NULL,
eaten BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);