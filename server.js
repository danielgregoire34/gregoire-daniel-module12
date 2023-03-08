const mysql = require('mysql2');
const inquirer = require('inquirer');
//const db = require(".");

const db = mysql.createConnection(
    {
    host: 'localhost',
      // MySQL username,
    user: 'root',
      // MySQL password
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
    console.info("You entered: " + result.name);

    switch (result.name) {
        
        case "View employees":
        viewEmployees();
    }
}
);

}


function viewEmployees(){
  let query = "SELECT * FROM employee";

connection.query(query, function(err, res) 
{
    if (err) throw err;
    console.table(res);
    start();
});

}


/*

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/