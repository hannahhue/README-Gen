//grab inquirer and the fs to make page
const inquirer = require("inquirer");
const fs = require("fs");

//inital promtps with questions for readme pg
inquirer
  .prompt([
    {
      type: "text",
      message: "Create your README file here! Just type or select your ansers when prompted.",
      name: "open",
    },
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
    {
      type: "input",
      message: "Were there any other contributers?",
      name: "cont",
    },
    {
      type: "input",
      message: "Were any tests preformed?",
      name: "test",
    },
    {
      type: "input",
      message: "Which is the best way to reach you?",
      name: "quest",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
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
    var licenseDes =
  } else if (choices.license === "Apache") {
    var license = `https://badgen.net/gitlab/license/gitlab-org/omnibus-gitlab`;
    var licenseDes =

  } else {
    var license = `https://badgen.net/hackage/license/Cabal`;
    var licenseDes =

  }
  //writing each choice in the file
  fs.writeFile(
    "README.md",
    //format + choices input
    `# ${choices.title} ![badge](${license})

## Description

${choices.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#tests)
- [Questions](#questions)

## Installation

${choices.instal}

## Usage

${choices.use}

## Credits

${gitUser}

${choices.cont}

## Tests

${choices.test}

## Questions

${choices.quest}

Email: ${choices.email}
Github: ${gitUser}

## License

![badge](${license})`,

    //checks if it logged correctly or failed :3
    (err) => (err ? console.error(err) : console.log("Success!"))
  );
}
