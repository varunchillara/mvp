CREATE DATABASE MVP;

USE MVP;

CREATE TABLE entry (
  id int NOT NULL AUTO_INCREMENT,
  user varchar(100),
  name varchar(100),
  category varchar(100),
  summary varchar(500),
  rating int,
  lat DECIMAL(28,14),
  lng DECIMAL(28,14),
  date date,
  helpfullness int,
  PRIMARY KEY (id)
);