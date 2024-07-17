-- Deletes the database if it exists
DROP DATABASE IF EXISTS employee;
-- Create DATABASE
CREATE DATABASE employee;

-- Make Active database
\c employee



-- Create a department table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Create Role Table
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department INTEGER NOT NULL,
    FOREIGN KEY (department)
    references department(id)
);

-- create Employee table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER references employee(id), 
    FOREIGN KEY (role_id)
    references role(id)

);
