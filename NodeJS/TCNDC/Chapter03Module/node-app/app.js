
//import file system module: https://nodejs.org/dist/latest-v12.x/docs/api/fs.html
const fs = require('fs');

//imports are required to use other files, standard language feature(as this) or npm packages
fs.writeFileSync('appo.txt','wrote by node.js');

//it's a best practice to mantain the same import name (fs) as show in the documentation page

//////////////////////////////////////////////////////////////////////////////
fs.appendFileSync('appo.txt','\n--- --- --- --- --- --- --- --- --- --- --- --- ');
fs.appendFileSync('appo.txt','\nWe append all the day long');

//import custom file
const firstName = require('./util.js')
console.log(firstName)

const sum = require('./utilfunction.js')
console.log('sum: ' + sum(10, 15))

const notes = require('./notes.js')
console.log(notes())

//import npm modules
/*
first we need to initialize npm in our proget running from the terminal 'npm init' in our project folder : ...\Learning-Path-HTML5-Fundamentals\NodeJS\The Complete Nodejs Developer Course\Chapter03\node-app
The command will create a configuration file (package.json) used to manage all the dependencies from the npm web site we want to install
Now we can install validato packajes https://www.npmjs.com/package/validator using 'npm i validator'; we can specify version using 'npm i validator@10.8.0'
This create a new file package-lock.json and a new directory node_modules
- node_modules contains the code installed
- package-lock.json contains security reason
We should never change this data
*/
const validator = require('validator') //package name
console.log(validator.isEmail('pippo@gmail.com'))
console.log(validator.isEmail('pippo@gmailcom'))

console.log(validator.isURL('https://www.npmjs.com/package/validator'))
console.log(validator.isURL('htps://www.npmjs.com/package/validator'))


/*
It's possible to recreate the folder node_modules usig the information present inside package-lock.json and package.json
The command 'npm install' (necessary when running the code of this course)
*/
//chalk
const chalk = require('chalk')
console.log('Success!!')
console.log(chalk.bold('Success!!'))
console.log(chalk.green('Success!!'))
console.log(chalk.black.bgWhite('Success!!'))

/*
Global npm module are not loaded directly in our source file
Use the command 'npm i nodemon@1.18.5 -g' where -g stand for global
This command install the package in our operative system
To check the result we can run 'nodemon -v' to see the installed version
To use this packeg run the script using 'nodemon app.js' instead of the classic 'node app.js' 
The app will be re-executed every time you save the files
*/ 
console.log(chalk.blue.inverse('Success!!'))
//to stop smple use ctrl+c on the terminal
