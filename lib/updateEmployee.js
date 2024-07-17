const inquirer  = require("inquirer")
//change name to get new employee info

let questions = [
    {
        type: 'input',
        message: `What is the Employee's id?`,
        name: 'employee_id'
    },{
        type: 'input',
        message: `What is the Employee's new role id?`,
        name: 'role_id'
    },{
        type: 'input',
        message: `What is the Employee's new Manager's id? `,
        name: 'manager_id'
    },
]

async function updateEmployee() {
    console.log('this is touched')
    
   let answers = inquirer
.prompt(questions)
.then((answers) => {
    let {employee_id,role_id,manager_id} = answers
    if (manager_id === ""){
        manager_id = null
    }


    let sql = `Update employee
    set role_id = ${role_id},
    manager_id = ${manager_id}
    where id = ${employee_id} ;`
    return sql

})
.catch((error) => {
    console.log(error)
})
return answers
}

module.exports = updateEmployee