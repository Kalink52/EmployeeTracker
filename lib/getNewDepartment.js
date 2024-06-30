const inquirer  = require("inquirer")

let questions = [
    {
        type: 'input',
        message: `What is the new department name?`,
        name: 'name'
    }
]

async function getNewDepartment () {
    console.log('this is touched')
    
   let answers = inquirer
.prompt(questions)
.then((answers) => {
    let {name} = answers
    let sql = `INSERT INTO department (name)
   values  ('${name}');`
    return sql

})
.catch((error) => {
    console.log(error)
})
return answers
}

module.exports = getNewDepartment