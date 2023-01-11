const inquirer = require('inquirer');
const fs = require ("fs");
const fileGenerator = require("./generateMarkdown.js")
const questions = [{
    type: 'input',
    message: 'what is the title of you README?',
    name: 'title',
},
{
    type: 'input',
    message: 'a description of your project(motivation? what problem does it solve? what did you learn?)',
    name: 'description',
},
{
    type: 'input',
    message: 'what is the installation process?',
    name: 'installation',
},
{
    type: 'input',
    message: 'how do you use the application?',
    name: 'usage',
},
{
    type: 'input',
    message: 'relative path to your image',
    name: 'img',
},
{
    type: 'input',
    message: 'how do you test your application?',
    name: 'test',
},
{
    type: 'input',
    message: 'what resources did you use and who helped you?',
    name: 'credits',
},
{
    type: 'list',
    message: 'what license did you use?',
    name: 'license',
    choices : [
        "MIT",
        "ISC",
        "Apache",
        "BSD 3-clause",
        "N/A"
    ]
},
{
    type: 'input',
    message: 'what special features does it have?',
    name: 'features',
},
{
    type: 'input',
    message: 'email to contact you',
    name: 'email'
},
{
    type: 'input',
    message: 'link to your github profile',
    name: 'gitHub'
}
]
inquirer
    .prompt(questions)
.then((answers) => {
    const readMe = fileGenerator(answers)
    fs.writeFile("./GeneratedReadMe.md", readMe, error =>{
    !error ? console.log('success!')
    : console.log('an error occured')
    })
})
