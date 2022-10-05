//grab inquirer and the fs to make page
const inquirer = require("inquirer");
const fs = require("fs");

//inital promtps with questions for readme pg
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
      message: "Is there any installation?",
      name: "instal",
    },
    {
      type: "input",
      message: "What is the usage?",
      name: "use",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "gitName",
    },
    //list 3 license instead of typing them out
    {
      type: "list",
      choices: ["MIT", "Apache", "BDS3"],
      message: "Which license are you using?",
      name: "license",
    },
  ])

  //start function to produce readme
  .then((response) => generateReadMe(response));

//creating pg
function generateReadMe(choices) {
  //adding the users username to the github link
  var gitUser = `https://github.com/${choices.gitName}`;
  //deciding which license to pull and each has their own badge
  if (choices.license === "MIT") {
    var license = `https://badgen.net/github/license/micromatch/micromatch`;
  } else if (choices.license === "Apache") {
    var license = `https://badgen.net/gitlab/license/gitlab-org/omnibus-gitlab`;
  } else {
    var license = `https://badgen.net/hackage/license/Cabal`;
  }
  //writing each choice in the file
  fs.writeFile(
    "README.md",
    `# ${choices.title} 

## Description

${choices.description}

## Installation

${choices.instal}

## Usage

${choices.use}

## Credits

${choices.gitUser} 

## License

![badge](${license})`,

    (err) => (err ? console.error(err) : console.log("Success!"))
  );
}
