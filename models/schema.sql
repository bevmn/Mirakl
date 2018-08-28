-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS artsy_db;
-- Creates the "todolist" database --
CREATE DATABASE artsy_db;

USE artsy_db;


  CREATE TABLE art
 (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NULL,
  category VARCHAR(50) NULL,
  artist VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(10) NULL,
  
  PRIMARY KEY (id)
  
);

CREATE TABLE seller

  (
  id INT NOT NULL AUTO_INCREMENT,
  seller_name VARCHAR(100) NULL,
  business_name VARCHAR(100) NULL,
  address_1 VARCHAR(50) NULL,
  address_2 VARCHAR(50) NULL,
  phone_number VARCHAR(10),
  city VARCHAR(50) NULL,
  state CHAR(2) NULL,
  zip INT(10) NULL,
  
  PRIMARY KEY (id)
  
);

CREATE TABLE customer

  (
  id INT NOT NULL AUTO_INCREMENT,
  customer_name VARCHAR(100) NULL,
  address_1 VARCHAR(50) NULL,
  address_2 VARCHAR(50) NULL,
  phone_number INT(10),
  city VARCHAR(50) NULL,
  state CHAR(2) NULL,
  zip INT(10) NULL,
  
  PRIMARY KEY (id)
  
);