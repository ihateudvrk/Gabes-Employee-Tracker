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
            default:
                quit();
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
        init();
    })
};

//showing roles
function viewAllRoles(){
    let sqlQuery = `select * from role;`
    db.query (sqlQuery,(err,results) => {
        if(err) console.log(err);
        console.table(results)
        init();
    })
};

//showing employees
function viewAllEmployees(){
    let sqlQuery = `select * from employee;`
    db.query (sqlQuery,(err,results) => {
        if(err) console.log(err);
        console.table(results)
        init();
    })
};

//Adding Department
function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"
    })
    .then(function (answer) {
        db.query("INSERT INTO department (name) VALUES (?)", [answer.deptName], function (err, res) {
            if (err) throw err;
            console.table(res)
            init();
        })
    })
};

function addRole(){
    inquirer.prompt([
        {
            type: "input",
            message: "What's the name of the role?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the salary for this role?",
            name: "salaryTotal"
        },
        {
            type: "input",
            message: "What is the department id number?",
            name: "deptID"
        }])
    .then(function(answer) {
        db.query("INSERT INTO role (position, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {
        if(err) throw err;
        console.table(res);
        init();
      });
    });
};

function addEmployee(){
    inquirer.prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "eeFirstName"
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "eeLastName"
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID"
      }
    ])
    .then(function(answer) {
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function(err, res) {
        if (err) throw err;
        console.table(res);
        init();
      });
    });
};


function updateEmployee() {
    inquirer.prompt([
        {
          type: "input",
          message: "Which employee would you like to update?",
          name: "eeUpdate"
        },
  
        {
          type: "input",
          message: "What do you want to update to?",
          name: "updateRole"
        }
      ])
      .then(function(answer) {
         db.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.eeUpdate],function(err, res) {
          if (err) throw err;
          console.table(res);
          init();
        });
      });
  }

function quit() {
    connection.end();
    process.exit();
  }
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