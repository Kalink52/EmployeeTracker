const inquirer  = require("inquirer")

let questions = [
    {
        type: 'input',
        message: `What is the Role Title?`,
        name: 'title'
    },{
        type: 'input',
        message: `What is the Role Salary?`,
        name: 'salary'
    },{
        type: 'input',
        message: `What is the roles department id?`,
        name: 'department'
    }
]

async function getNewRole () {
    console.log('this is touched')
    
   let answers = inquirer
.prompt(questions)
.then((answers) => {
    let {title, salary, department} = answers
    let sql = `INSERT INTO role (title, salary, department)
   values  ('${title}', ${salary}, ${department});`
    return sql

})
.catch((error) => {
    console.log(error)
})
return answers
}

module.exports = getNewRole