DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE employee (

    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE department (

    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE role (

    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);


/*Employees*/
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Michael", "Scott", 1, 0),
        (2, "Jim", "Halpert", 3, 1),
        (3, "Dwight", "Schrute", 2, 1),
        (5, "Stanley", "Hudson", 4, 1),
        (6, "Phillis", "Vance", 4, 1),
        (7, "Andrew", "Bernard", 4, 1),
        (8, "Kelly", "Kapoor", 7, 1),
        (9, "Ryan", "Howard", 12, 1),
        (10, "Angela", "Martin", 5, 1),
        (11, "Kevin", "Malone", 6, 1),
        (12, "Oscar", "Martinez", 6, 1),
        (13, "Toby", "Flenderson", 10, 1),
        (14, "Creed", "Bratton", 8, 1),
        (15, "Merideth", "Palmer", 9, 1);

        
/*Departments*/
INSERT INTO department (id, name)
VALUES (1, "Managment"),
        (2, "Sales"),
        (3, "Accounting"),
        (4, "Quality Assurance"),
        (5, "Customer Service"),
        (6, "Human Resources"),
        (7, "Reception"),
        (8, "Supplier Relations");



/*Roles*/
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Regional Manager", 60000, 1),
        (2, "Assistant to the Manager", 45000, 2),
        (3, "Lead Salesman", 50000, 2),
        (4, "Salesman", 45000, 2),
        (5, "Head of Accounting", 50000, 3),
        (6, "Accountant", 45000, 3),
        (7, "Customer Service Specialist", 40000, 5),
        (8, "Quality Assurance Director", 45000, 4),
        (9, "Supplier Relations Director", 45000, 8),
        (10, "Human Resourses Representative", 40000, 6),
        (11, "Receptionist", 35000, 7),
        (12, "Temp", 29000, 6);

