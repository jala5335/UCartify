
CREATE DATABASE ucartifydatabase;
USE ucartifydatabase;

CREATE TABLE ucartifydatabase.users(
    user_id INT PRIMARY KEY,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL
);

CREATE TABLE ucartifydatabase.products(
    product_id INT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    url VARCHAR(45) NOT NULL,
    price DECIMAL(6) NOT NULL
);