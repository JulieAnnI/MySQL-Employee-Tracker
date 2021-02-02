//Requirements
const mysql = require("mysql");
const inquirer = require("inquirer");
//Constants of choices
const add = "add", view = "view", deletion = "delete", exit = "exit";
const employee = "employee", role = "role",  department= "department";

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
            message: "What would you like to do: add, view, delete or exit?",
            choices: [add, view, deletion, exit]
        });
        
        switch (answer.addViewDelete) {

            case add:
                return add();
            case view:
                return view();
            case deletion:
                return deletion();
            case exit:
                return exit();
        }
    } catch (error) {
        throw error;
    }
    
}

