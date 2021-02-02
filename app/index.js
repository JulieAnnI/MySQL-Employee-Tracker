//Requirements
const mysql = require("mysql");
const inquirer = require("inquirer");
//Constants of choices
const ADD = "ADD", VIEW = "VIEW", DELETE = "DELETE", EXIT = "EXIT";
const EMPLOYEE = "EMPLOYEE", ROLE = "ROLE",  DEPARTMENT = "DEPARTMENT";

//Connecting to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "GRS4eva!",
    database: "employee_db"
});

//Connect to database function and initializing Inqurier
connection.connect((error) =>{
    if (error) throw error;
    console.log("Connected to Database")
    init();
});

//Initialize function
async function init() {
    console.log("Initializing");
    try {
        let answer = await inquirer.prompt({
            name: "addViewDelete",
            type: "list",
            message: "What would you like to  add, view, delete or exit from the Employee Database?",
            choices: [ADD, VIEW, DELETE, EXIT]
        });
        
        switch (answer.addViewDelete) {

            case ADD:
                return add();
            case VIEW:
                return view();
            case DELETE:
                return deletion();
            case EXIT:
                return exit();
        }
    } catch (error) {
        throw error;
    }
    
}
//Choices for which table to add to in Database
async function add() {
    console.log("Add to Employee Database")
    try {
        let answer = await inquirer.prompt({
            name: "tableName",
            type: "list",
            message: "Which table would you like to add to?",
            choices: [EMPLOYEE, ROLE, DEPARTMENT]
        
        });
        switch (answer.tableName) {
            
            case EMPLOYEE:
                return addEmployee();
            case ROLE:
                return addRole();
            case DEPARTMENT:
                return addDepartment();

        }
    } catch (error) {
        throw error;
    }
}
//Add Employe function 
async function addEmployee() {
    console.log("Add Employee");
    try {
        let answer = await inquirer.prompt([
            {
                name: "idEmployee",
                type: "input",
                message: "Enter Employee's ID number."
            },
            {
                name: "firstName",
                type: "input",
                message: "Enter Employee's first name."

            },
            {
                name: "lastName",
                type: "input",
                message: "Enter Employee's last name."
            },
            {
                name:"idRole",
                type: "input",
                message: "Enter Employee's role ID number."
            },
            {
                name: "idManager",
                type: "input",
                message:"If applicable, enter Employee's manager ID number."
            }
        ]);

        connection.query(
            "INSERT INTO employee SET ?",
            {
                id: answer.idEmployee,
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.idRole,
                manager_id: answer.idManager
            },
            error => {
                if (error) throw error;
                console.log ("Employee was added!")
                return init();
            }
        );
    } catch (error) {
        throw error;
    }
}

async function addRole() {
    console.log("Add Role");
    try {
        let answer = await inquirer.prompt([
            {
                name: "idRole",
                type: "input",
                message: "Enter role ID number."
            },
            {
                name: "title",
                type: "input",
                message: "Enter role's title."

            },
            {
                name: "salary",
                type: "input",
                message: "Enter salary for this role."
            },
            {
                name:"idDepartment",
                type: "input",
                message: "Enter department ID number."
            }
        ]);

        connection.query(
            "INSERT INTO role SET ?",
            {
                id: answer.idRole,
                title: answer.title,
                salary: answer.salary,
                department_id: answer.idDepartment
            },
            error => {
                if (error) throw error;
                console.log ("Role was added!")
                return init();
            }
        );
    } catch (error) {
        throw error;
    }
}

async function addDepartment() {
    console.log("Add Role");
    try {
        let answer = await inquirer.prompt([
            {
                name: "idDepartment",
                type: "input",
                message: "Enter department ID number."
            },
            {
                name: "departmentName",
                type: "input",
                message: "Enter department name."

            }
        ]);

        connection.query(
            "INSERT INTO department SET ?",
            {
                id: answer.idDepartment,
                name: answer.departmentName
            },
            error => {
                if (error) throw error;
                console.log ("Department was added!")
                return init();
            }
        );
    } catch (error) {
        throw error;
    }
}