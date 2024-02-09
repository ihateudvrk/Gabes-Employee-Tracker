const mysql = require ('mysql2');
const inquirer = require ('inquirer');

// creating a connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'goose',
      database: 'employee_info_db'
    },
    console.log(`Connected to the employee_info_db database.`)
  );


// The function prompting the user in the main menu
function init (){
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'userchoice',
        message: 'Select one out of the following.',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      },
    ])
   
// 

    .then(answers => {
      console.info('Answer:', answers.userchoice);
      let {userchoice} = answers

      switch(userchoice){
            case "view all departments":
                viewAllDepartments();
            break;
        
            case "view all roles":
                viewAllRoles();
            break;
        
            case "view all employees":
                viewAllEmployees();
            break;
        
            case "add a department":
                addDepartment();
            break;
        
            case "add a role":
                addRole();
            break;
        
            case "add an employee":
                addEmployee();
            break;
        
            case "update an employee role":
                updateEmployee();
            break;

      }
    });
}


// calling the function
init()


//showing departments
function viewAllDepartments(){
    let sqlQuery = `select * from department;`
    db.query (sqlQuery,(err,results) => {
        if(err) console.log(err);
        console.table(results)
    })
};

//showing roles
function viewAllRoles(){
    let sqlQuery = `select * from role;`
    db.query (sqlQuery,(err,results) => {
        if(err) console.log(err);
        console.table(results)
    })
};

//showing employees
function viewAllEmployees(){
    let sqlQuery = `select * from employee;`
    db.query (sqlQuery,(err,results) => {
        if(err) console.log(err);
        console.table(results)
    })
};


function addDepartment(){};

function addRole(){};

function addEmployee(){};
/*
Charlie's suggestion:
    1. Create the main menu
        - Import inquirer
        - Create a single prompt of type List
        - Make sure the answer is getting recorded properly
    2. Make sure that all the View routes work
        - View all employees == SELECT * FROM employee and then write to console (console.table)
        - View all departments ""
        - View all roles ""
    3. Figure out how to re-display the main menu

    4. Inserts
        - employee = INSERT INTO 
*/