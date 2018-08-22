DROP DATABASE IF EXISTS artsySellDB;
CREATE DATABASE artsySellDB;

USE artsySellDB;


  

CREATE TABLE art;

  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NULL,
  category VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(10) NULL
  
  PRIMARY KEY (id)
  
);







INSERT INTO art(item_name, category, price, stock_quantity)
VALUES ("Human", "Krewella", "Dance");

INSERT INTO art(item_name, category, price, stock_quantity)
VALUES ("TRNDSTTR","Black Coast", "Dance");

INSERT INTO art(item_name, category, price, stock_quantity)
VALUES ("Who's Next", "The Who", "Classic Rock");

INSERT INTO art(item_name, category, price, stock_quantity)
VALUES ("Yellow Submarine", "The Beatles", "Classic Rock");

