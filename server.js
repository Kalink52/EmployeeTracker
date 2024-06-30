const inquirer = require ('inquirer');
const express = require('express');
const { Pool } = require('pg');
const PORT = process.env.PORT || 3001
const app = express()
const artBanner = require('./lib/textart');
//table attempts
const displayTable = require('./lib/displaytable');
const getNewEmployee = require('./lib/getNewEmployee');
const getNewRole = require('./lib/getNewRole');
const getNewDepartment = require('./lib/getNewDepartment');


/* Pass your inquirer questions in here */
const questions = [
  {
  type: 'list',
  message: 'What would you like to do?',
  name: 'choice', //?
  choices: [
      'View All Employees', 
      'Add Employee',
      'Update Employee Role',
      'View all Roles',
      'Add Role',
      'View All Departments',
      'Add Department',
      'Quit']
  },
]

//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//creating the link to database?
const pool = new Pool (
  {
    // PostgreSQL Username
    user: 'postgres',
    //postgreSQL pass
    password: 'micha',
    host: 'localhost',
    database: 'employee'
  },
  console.log("You've connected to the employee database ")
)
//connecting to the database?
pool.connect()

//testing space




function init () {
// run banner on start up?
  // console.log(artBanner())

// maybe put inquirer in it's own function?
inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.choice)
    //declareing sql
    let sql = '';
    switch (answers.choice) {
      case 'View All Employees':
        sql = 'select * FROM employee';

        pool.query(sql, function (err, {rows}) {
          console.table(rows);
        })
        break;
      case 'Add Employee':
        //change name of function to getNewEmployee info
        getNewEmployee()
        .then((sql) => {
          console.log(sql)
          pool.query(sql, function (err, result) {
            if (err){
              console.log(err)
              return
            }
            console.log(result)

          })
        })
          return
      case 'Update Employee Role': //todo
        break;
      case 'View all Roles':
        sql = 'select * FROM role'

        pool.query(sql, function (err, {rows}) {
          console.table(rows);
        })
        break;
      case 'Add Role':
      getNewRole()
      .then((sql) => {
        console.log(sql)
        pool.query(sql, function (err, result) {
          if (err){
            console.log(err)
            return
          }
          console.log(result)

        })
      })
        break;
      case 'View All Departments':
        sql = 'select * from department'

        pool.query(sql, function (err, {rows}) {
          if (err) {
            console.log(err)
          }
        console.table(rows);
        })
        break;
      case 'Add Department':
        getNewDepartment()
        .then((sql) => {
          console.log(sql)
          pool.query(sql, function (err, result) {
            if (err){
              console.log(err)
              return
            }
            console.log(result)
  
          })
        })
        break;
      default: process.exit()
    }
    // loops the code
    // init() 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
  init()