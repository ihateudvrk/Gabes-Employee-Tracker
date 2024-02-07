DROP DATABASE IF EXISTS employee_info_db;
CREATE DATABASE employee_info_db;

USE employee_info_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);


CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    position VARCHAR(30) NOT NULL
    salary DECIMAL(10, 2) NOT NULL
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES DEPARTMENT(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES ROLE(id)
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES EMPLOYEE(id)
);