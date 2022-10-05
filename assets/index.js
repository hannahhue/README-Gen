const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "How would you like to describe your project?",
      name: "description",
    },
    {
      type: "input",
      message: "Do you need a Table of Contents?",
      name: "table",
    },
    {
      type: "input",
      message: "Is there any installation?",
      name: "",
    },
    {
      type: "input",
      message: "What is the usage?",
      name: "use",
    },
    {
      type: "input",
      message: "Who would you like to Credit?",
      name: "credit",
    },
    {
      type: "input",
      message: "Which license are you using?",
      name: "license",
    },
  ])
  .then((response) =>
    fs.writeFile(
      "README.md",
      `${response.name} \n ${response.language} \n ${response.communication}`,
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  );
