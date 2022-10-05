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
      type: "list",
      choices: ["MIT", "Apache", "BDS3"],
      message: "Which license are you using?",
      name: "license",
    },
  ])

  .then((response) => generateReadMe(response));

function generateReadMe(choices) {
  if (choices.license === "MIT") {
    var license = `https://badgen.net/github/license/micromatch/micromatch`;
  } else if (choices.license === "Apache") {
    var license = `https://badgen.net/gitlab/license/gitlab-org/omnibus-gitlab`;
  } else {
    var license = `https://badgen.net/hackage/license/Cabal`;
  }
  fs.writeFile(
    "README.md",
    `${choices.title} \n ${choices.description} \n ${choices.instal} \n ${choices.use} \n ${choices.gitName} \n ![badge](${license})`,
    (err) => (err ? console.error(err) : console.log("Success!"))
  );
}
