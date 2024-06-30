const inquirer = require ('inquirer');
const express = require('express');
const { Pool } = require('pg');
const PORT = process.env.PORT || 3001
const app = express()
const artBanner = require('./lib/textart')

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

pool.query('select * FROM department', function (err, {rows}) {
  console.log(rows);
})
pool.query('select * FROM department', function (err,res) {
  console.log(res);
})

// app.get('/api/employees', (req, res) => {
//   const sql = 'select * FROM department'; //sql query goes here
  
//   pool.query(sql, function (err, {rows}) {
//     console.log(rows);
//     res.json(rows)
  
// })
// })


app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


function init () {
// run banner on start up?
  // console.log(artBanner())

// maybe put inquirer in it's own function?
inquirer
  .prompt(questions
  )
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.choice)
    switch (answers.choice) {
      case 'View All Employees':
        console.log('reached')
        break;
      case 'Add Employee':
        break;
      case 'Update Employee Role':
        break;
      case 'View all Roles':
        break;
      case 'Add Role':
        break;
      case 'View All Departments':
        pool.query('select * FROM department', function (err, {rows}) {
        console.log(rows);
        })
        break;
      case 'Add Department':
        break;
      default:
        //make this quit fully
        return
    }
    init()

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
  // init()