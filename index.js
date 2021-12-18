//inquirer read docs  arrays of questions - the trick is to make an array of question objects
const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/generate-site.js.js');
const path = require("path");
const teamMembers = [];

const promptManager = () => {
    console.log(`
    ========================
    Add New Manager
    ========================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput = () => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter your name");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: "employeeId",
            message: 'What is your employee ID?',
            validate: employeeId = () => {
                if (employeeId) {
                    return true;
                } else {
                    console.log("Enter your employeeId");
                    return false;
                }

            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: email = () => {
                if (email) {
                    return true;
                } else {
                    console.log("Enter your email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: officeNumber = () => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Enter your office number");
                    return false;
                }
            }
        }

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        teamMembers.push(manager);
        promptMenu();

    })
};
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select an option:',
            options: ['engineer', 'intern', 'build team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case " add engineer":
                    promptEngineer()
                    break
                case "add intern":
                    promptIntern()
                    break
                default: buildTeam()

            }
        });

};

const promptEngineer = () => {
    console.log(`
    ========================
    Add New Engineer
    ========================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer name?",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Enter Engineer name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer email?",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log('Enter Engineer Email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer github username?",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log('Enter Engineer Github Username');
                    return false;
                }
            }
        }

    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        teamMembers.push(engineer);
        promptMenu();



    })
}
const promptIntern = () => {
    console.log(`
    ========================
    Add New Intern
    ========================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern name?",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Enter Intern name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern email?",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log('Enter Intern Email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "What is the Intern employeeID?",
            validate: InternEmployeeId => {
                if (InternEmployeeId) {
                    return true;
                } else {
                    console.log('Enter Intern Email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the Intern School?",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log('Enter Intern School');
                    return false;
                }
            }
        }

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school)
        teamMembers.push(intern);
        promptMenu();

    })
}

const buildTeam = () => {
    console.log(`
    ==============
    Team Built!
    ==============
    `);

    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");

}
promptManager();