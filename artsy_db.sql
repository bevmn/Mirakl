DROP DATABASE IF EXISTS artsy_db;
CREATE DATABASE artsy_db;

USE artsy_db;


  

CREATE TABLE art;

  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NULL,
  category VARCHAR(50) NULL,
  artist VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(10) NULL
  
  PRIMARY KEY (id)
  
);



INSERT INTO art(item_name, category, price, stock_quantity)
VALUES ("Glo", "classic", "Rembrandt" 1199.00, 4);

INSERT INTO art(item_name, category, price, stock_quantity)
VALUES ();

INSERT INTO art(item_name, category, price, stock_quantity)
VALUES ();

INSERT INTO art(item_name, category, price, stock_quantity)
VALUES ();



CREATE TABLE seller;

  id INT NOT NULL AUTO_INCREMENT,
  seller_name VARCHAR(100) NULL,
  business_name VARCHAR(100) NULL,
  address_1 VARCHAR(50) NULL,
  address_2 VARCHAR(50) NULL,
  phone_number INT(10)
  city VARCHAR(10,2) NULL,
  state CHAR(2) NULL
  zip INT(10) NULL
  
  PRIMARY KEY (id)
  
);



INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ("Bev Nelsen", "141 4th St. E", "Apt 634" 3082504580, "St. Paul", MN, 55101);

INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ();

INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ();

INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ();




CREATE TABLE customer;

  id INT NOT NULL AUTO_INCREMENT,
  customer_name VARCHAR(100) NULL,
  address_1 VARCHAR(50) NULL,
  address_2 VARCHAR(50) NULL,
  phone_number INT(10)
  city VARCHAR(50) NULL,
  state CHAR(2) NULL
  zip INT(10) NULL
  
  PRIMARY KEY (id)
  
);



INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ("John Cusak", "340 Sedgewick", "Unit 8A" 5185551212, "Chicago", IL, 60610);

INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ();

INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ();

INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ();
