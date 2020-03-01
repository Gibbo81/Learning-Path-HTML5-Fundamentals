const notes = require('./notes.js')
const chalk = require('chalk')

/*ommand parameter
To pass a command parameter run the program with : node app.js pippo pluto
process.argv is an array with four value:
[ 'C:\\nodejs\\node.exe',
  'C:\\GitRepo\\Learning-Path-HTML5-Fundamentals\\NodeJS\\The Complete Nodejs Developer Course\\Chapter04\\node-app\\app.js',
  'pippo',
  'pluto']
position of node, position of js script and commad parameter
*/
console.log(process.argv)


const command =process.argv[2]
if (command== 'add'){
    console.log('adding note')
} else if (command== 'remove'){
    console.log('removing note')
}