INSERT INTO department (name) 
VALUES ('Assets Protection'), ('Service and Engagement'), ('Style');

INSERT INTO role (position, salary, department_id)
VALUES ('Assets Protection Team Leader', 58000, 1), ('Service and Engagement Team Leader', 54000, 2), ('Style Team Leader', 54000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 1), ('Jane', 'Doe', 2, 1), ('Jim', 'Doe', 3, 1), ('Jill', 'Doe', 1, 2), ('Jack', 'Doe', 2, 3), ('Jenny', 'Doe', 3, 3);
