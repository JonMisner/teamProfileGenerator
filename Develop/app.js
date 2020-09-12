// global variables and requirements for scripts
// =============================================
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

// Prompts and Functions cotrolling them
// =====================================

// initial prompt to add team manager
function addManager() {
   console.log("please add manager info");
   inquirer.prompt([
      {
         type: "input",
         name: "managerName",
         message: "what is the name of the manager?"
      },
      {
         type: "input",
         name: "managerId",
         message: "What is your manager's ID number?"
      },
      {
         type: "input",
         name: "managerEmail",
         message: "What is your manager's email address?"
      },
      {
         type: "input",
         name: "managerOfficeNum",
         message: "What is your manager's office number?"
      }
   ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
      console.log(manager);
      teamMembers.push(manager);
      createTeam()
   })
}
// asks what type of employee you want to add then sends user to appropriate function
function createTeam(){  
   inquirer.prompt([
      {
         type: "list",
         name: "memberChoice",
         message: "Which type of team member would you like to add?",
         choices: [
            "Engineer",
            "Intern",
            "I don't want anymore, build the team"
         ]
      }
   ]).then(userChoice => {
      switch(userChoice.memberChoice){
         case "Engineer":
            createEngineer();
            break;
         case "Intern":
            createIntern();
            break;
         default:
            buildTeamPage();     
      }
   })
}
// creates and enginner class employee
function createEngineer(){
   console.log("please add engineer info");
   inquirer.prompt([
      {
         type: "input",
         name: "engineerName",
         message: "what is the name of the engineer?"
      },
      {
         type: "input",
         name: "engineerId",
         message: "What is your engineer's ID number?"
      },
      {
         type: "input",
         name: "engineerEmail",
         message: "What is your engineer's email address?"
      },
      {
         type: "input",
         name: "engineerGithub",
         message: "What is your engineer's Github account name?"
      }
   ]).then(answers => {
      const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      console.log(engineer);
      teamMembers.push(engineer);
      createTeam();
   })
}
// creates an Intern class employee
function createIntern(){
   console.log("please add intern info");
   inquirer.prompt([
      {
         type: "input",
         name: "internName",
         message: "what is the name of the intern?"
      },
      {
         type: "input",
         name: "internId",
         message: "What is your intern's ID number?"
      },
      {
         type: "input",
         name: "internEmail",
         message: "What is your intern's email address?"
      },
      {
         type: "input",
         name: "internSchool",
         message: "What is your intern's school?"
      }
   ]).then(answers => {
      const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      console.log(intern);
      teamMembers.push(intern);
      createTeam();
   })
}

// Function to build the team html page
// ====================================
function buildTeamPage(){
const data = render(teamMembers);

fs.writeFile(outputPath, data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
};

// The function call that starts it all
// ====================================
addManager();
