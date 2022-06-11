const Inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const webPage = require('./src/html-template');

const array = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the manager?'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the office number of the manager?'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the intern?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the school of the intern?'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the engineer?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the engineer?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the github of the engineer?'
    }
]


function app() {

    // creates manager for array
    function managerGenerator () {
        Inquirer.prompt(managerQuestions)
            .then(function (results) {
                const manager = new Manager(results.name, results.id, results.email, results.officeNum);
                array.push(manager);
                teamGenerator()
            })
    }

    managerGenerator();

    function teamGenerator() {
        Inquirer.prompt([
            {
                type: 'list',
                name: 'teamChoice',
                message: 'Please choose an option',
                choices: ['Intern', 'Engineer', 'Finish my team']
            }
        ])
        .then(function (choice) {
            switch (choice.teamChoice) {
                case 'Intern':
                    internGenerator();
                    break;
                case 'Engineer':
                    engineerGenerator();
                    break;
                default:
                    teamBuilder();
                    break;
            }
        })
    }

    function internGenerator() {
        Inquirer.prompt(internQuestions)
        .then(function (results) {
            const intern = new Intern(results.name, results.id, results.email, results.school);
            array.push(intern);
            teamGenerator();
        })
    }

    function engineerGenerator() {
        Inquirer.prompt(engineerQuestions)
        .then(function (results) {
            const engineer = new Engineer(results.name, results.id, results.email, results.github);
            array.push(engineer);
            teamGenerator();
        })
    }

    function teamBuilder() {
        console.log(array);
        fs.writeFileSync(path.join(path.resolve(__dirname,"dist"),'Team-Profile.html'), webPage(array), 'utf-8')
    }
}

app();