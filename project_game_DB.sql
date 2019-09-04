CREATE DATABASE project_game_DB;
use project_game_DB;

CREATE TABLE users (
    id INT NOT NULL auto_increment,
    username VARCHAR(15) NOT NULL, 
    email varchar (100) NOT NULL,
    password binary (50) NOT NULL,
    primary key (id)
);

INSERT INTO users (id, username, password, email) VALUES (1, 'test', 'test', 'test@test.com');

 select * from users;
 
 INSERT INTO users (id, username, password, email) VALUES (2, 'test2', 'test2', 'test2@test2.com');

ALTER TABLE users modify password varchar(60) NOT NULL;

 