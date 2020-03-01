//command line for lunching the script: node app.js add --title="pippo e le storie" --body="è una lunga storia"

const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

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

//library to parse the comman
//customize yarg
yargs.version('1.1.1');

//create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder :{  //configure command parameters
        title :{
            describe: 'new note title',
            demandOption : true, //mandatory parameter
            type : 'string'
        },
        body:{
            describe : 'new note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    handler : function(){
        console.log('Removing a note')
    }
})
yargs.command({
    command : 'list',
    describe : 'Listing all the notes',
    handler : function(){
        console.log('Listing notes')
    }
})
yargs.command({
    command : 'read',
    describe : 'Reading a note',
    handler : function(){
        console.log('Read a note')
    }
})

yargs.parse()  //parse command line arguments with the previous configuration 
//console.log(yargs.argv)  //print: { _: [ 'add' ], title: 'this is my title', '$0': 'app.js' }





