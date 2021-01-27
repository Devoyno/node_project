const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project Name?",
    name: "projectName"
  },
  {
    type: "input",
    message: "What is your project description?",
    name: "description"
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "install"
  },
  {
    type: "input",
    message: "What is your level of usage (1-10)?",
    name: "usage"
  },
  {
    type: "input",
    message: "Do you have any contribution instructions?",
    name: "contribution"
  },
  {
    type: "input",
    message: "Are tests included in the project?",
    name: "tests"
  },
  {
    type: "list",
    message: "What is your project license",
    name: "license",
    choices: ["MIT", "ISC", "APACHE 2.0"]
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
  },
  {
    type: "input",
    message: "What is your e-mail address?",
    name: "email"
  }
];



// function to initialize program
function init() {
  inquirer.prompt(questions).then(function(answers) {
    console.log(answers.projectName)
    const markdown = generateMarkdown(answers)
    console.log(markdown);
    fs.writeFileSync('README.md', markdown)
  })
}

// function call to initialize program
init();
