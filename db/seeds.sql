INSERT INTO department (name)
values ('Web Development'),
       ('Data Science'),
       ('Math'),
       ('Electives');

INSERT INTO role (title, salary, department)
values  ('something', 50000, 1),
        ('nothing', 200000, 2),
        ('more', 400000, 4),
        ('less', 300000, 3),
        ('headach', 100000, 1),
        ('test', 500000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
values  ('micah', 'cox', 1, NULL),
        ('micah', 'coxmanager', 3, NULL),
        ('micah', 'cox2', 4, 2),
        ('micah', 'cox3', 2, 2),
        ('micah', 'cox4', 1, NULL),
        ('micah', 'cox5', 1, NULL);