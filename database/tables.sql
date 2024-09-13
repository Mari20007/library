create database library;
use library;

create table book (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    publication_year INT NOT NULL,
    stock INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    isbn VARCHAR(13) UNIQUE NOT NULL
);

create table user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    phoneNumber VARCHAR(20) UNIQUE NOT NULL,
    address VARCHAR(255) NOT NULL
);
