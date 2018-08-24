DROP DATABASE IF EXISTS artsy_db;
CREATE DATABASE artsy_db;

USE artsy_db;


CREATE TABLE art(
id INT NOT NULL AUTO_INCREMENT,
item_name VARCHAR(100) NULL,
category VARCHAR(50) NULL,
artist VARCHAR(50) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT(10) NULL,
PRIMARY KEY (id)
);



INSERT INTO art(item_name, category, artist, price, stock_quantity)
VALUES ("Glo", "classic", "Unknown", 399.00, 1);

INSERT INTO art(item_name, category, artist, price, stock_quantity)
VALUES ("When Harry Met Sally Movie Poster", "Entertainment", "Unknown", 69.99, 2);

INSERT INTO art(item_name, category, artist, price, stock_quantity)
VALUES ("Abby Road", "Entertainment", "Lain Macmilan", 400.00, 1 );





CREATE TABLE seller(
id INT NOT NULL AUTO_INCREMENT,
seller_name VARCHAR(100) NULL,
business_name VARCHAR(100) NULL,
address_1 VARCHAR(50) NULL,
address_2 VARCHAR(50) NULL,
phone_number VARCHAR(15),
city VARCHAR(20) NULL,
state CHAR(2) NULL,
zip INT(10) NULL,
PRIMARY KEY (id)
);



INSERT INTO seller(seller_name, business_name, address_1, address_2, phone_number, city, state, zip)
VALUES ("Bev Nelsen", "Art Girl", "141 4th St. E", "Apt 634", "3082504580", "St. Paul", "MN", 55101);




CREATE TABLE customer(
id INT AUTO_INCREMENT NOT NULL,
customer_name VARCHAR(100) NULL,
address_1 VARCHAR(50) NULL,
address_2 VARCHAR(50) NULL,
phone_number VARCHAR(10),
city VARCHAR(50) NULL,
state CHAR(2) NULL,
zip INT(10) NULL,
PRIMARY KEY (id)
);



INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ("John Cusak", "340 Sedgewick", "Unit 8A", "5185551212", "Chicago", "IL", 60610);

INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ("Steve Jobs", "111 Apple Way", "", "3334441111", "Cupertino", "CA", 94024);

INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ("Rodney Strong", "12 Vinyard Lane", "Suite 1", "3657771998", "Napa", "CA", 94558);

INSERT INTO customer(customer_name, address_1, address_2, phone_number, city, state, zip)
VALUES ("Brooks Koepka", "","", "9026781234", "West Palm Beach", "FL", 33401);
