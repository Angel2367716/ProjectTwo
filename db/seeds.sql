CREATE TABLE users (
    id INT NOT NULL auto_increment,
    username VARCHAR(15) NOT NULL, 
    email varchar (100) NOT NULL,
    password binary (50) NOT NULL,
    primary key (id)
);