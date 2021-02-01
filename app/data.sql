DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE employee (

    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    PRIMARY KEY (id)
);

CREATE TABLE department (

    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE role (

    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    deparment_id INT,
    PRIMARY KEY (id)
);



INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Michael", "Scott", 0, 0);

