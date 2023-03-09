const mysql = require('mysql2');
const inquirer = require('inquirer');
//const db = require(".");
//require("console.table");

const db = mysql.createConnection(
    {
    host: 'localhost',
    port:3306,
    user: 'root',
    password: '1234',
    database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);

db.connect(function(err){

    if(err) throw err;
    
    start();

})

function start(){
    inquirer
    .prompt({
    type: "list",
    name:'start',
    message: "What would you like to do?",
    choices: [ 
    "View All Employees", 
    "Add Employees", 
    "Update Employee Role", 
    "View All Roles", 
    "Add Roles", 
    "View All Departments", 
    "Add Department", 
    "Quit"
    ],
    })
    .then(function(result) {
    console.info("You entered: " + result.start);

    switch (result.start) {
        case "View All Employees":
        viewEmployees();
        break;
        case "Add Employees":
        addEmployee();
        break;
        case "Update Employee Role":
        updateEmployees();
        break;
        case "View All Roles":
        viewAllRoles();
        break;
        case "Add Roles":
        addRoles();
        break;
        case "View All Departments":
        viewAllDepartments();
        break;
        case "Add Departments":
        addDepartments();
        break;
        case "Quit":
        quit();
    }
}
);

}


function viewEmployees(){
let query = "SELECT * FROM employee";
db.query(query, function(err, res) 
{
    if (err) throw err;
    console.table(res);
    start();
});

}


function addEmployee(){
inquirer.prompt([
    {
        type:"input",
        message: "What's the employee's ID",
        name:"eid"
    },
    {
        type:"input",
        message: "What's the employee's first name?",
        name:"efn"
    },
    {
        type:"input",
        message: "What's the employee's last name?",
        name:"eln"
    },
    {
        type:"input",
        message: "Who is there manager?",
        name:"em"
    },
    {
        type:"input",
        message: "What is their department",
        name:"ed"
    },
    {
        type: "input",
        message:"How much do they make?",
        name:"emon"
    },
    {
        type:"input",
        message: "What is their title?",
        name:"et"
    },
]).then(function(result){
    db.query("INSERT INTO employee (id, first_name, last_name, title, department, salary, manager) VALUES (?,?,?,?,?,?,?)",[result.eid, result.efn, result.eln, result.em,result.ed,result.emon,result.et], function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
})
})
}

function updateEmployees(){
inquirer.prompt([
{
    type: "input",
    message: "Which employee role do you want to update?",
    name:"eu"
},
{
    type: "input",
    message: "Which role do you want to assign to the employee?",
    name:"er"
},
]).then(function(result){
    db.query('UPDATE employee SET title=? WHERE fire_name= ?',[result.er,result.eu], function(err,res){
        if(err) throw err;
        console.table(res);
        start();
    })
})

}