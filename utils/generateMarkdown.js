function fixLicense(license) {
  var fixedLicense = license.split(" ").join("%20")
  return fixedLicense
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}



## Table of Contents:
* [Description of Project](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Level](#usage-level)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Usage](#test-usage)
* [License Info](#license-info)
* [GitHub Username](#github-username)
* [E-mail Address](#email-address)

## Description: 

The project uses ${data.description}

## Installation Instructions:

To install ${data.install}

## Usage Level

My level of usage is ${data.usage}

## Contribution Guidelines

To contribute: ${data.contribution}

## Test Usage

Does the project use tests: ${data.tests}

## License Info

The license for this project is: ![badge](https://img.shields.io/badge/License-${fixLicense(data.license)}-blue)

## GitHub Username:

My Github user name is: github.com/${data.github}

## Email Address

Please contact me at the following e-mail address: ${data.email}

`;
}

module.exports = generateMarkdown;
