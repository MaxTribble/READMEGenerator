// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseLinkBadge = ""

// if (${data.license} = "MIT"){
//   licenseLinkBadge = "MIT"
// }
function renderLicenseBadge(data) {
  if (data.license = "MIT"){
    licenseLinkBadge = "MIT"
  }
}
// "GPLv3",
//         "Apache",
//         "",
//         "none"

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.license === "MIT"){
  licenseLinkBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if (data.license === "Apache"){
  licenseLinkBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
} else if (data.license === "BSD 3-clause"){
  licenseLinkBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
} else if (data.license === "ISC"){
  licenseLinkBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
} else {
  licenseLinkBadge = ""
}
  return `# ${data.title}
  ${licenseLinkBadge}
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [Credits](#Credits)
  - [License](#License)
  - [Features](#Features)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  <img src="${data.img}" alt="readme generator" width="400" height="200"/>

  ## Tests
  ${data.test}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Features
  ${data.features}

  ## Questions
  ${data.email}
  
  ${data.gitHub}
`;
}

module.exports = generateMarkdown;
