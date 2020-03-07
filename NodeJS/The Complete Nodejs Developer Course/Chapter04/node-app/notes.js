const chalk = require('chalk')
const fs = require('fs')

const listNotes = () =>  {
    const allNotes = loadNotes()
    console.log(chalk.bgGreen('Your Notes'))
    allNotes.forEach(note =>  console.log(chalk.bgBlue(note.title)))     
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(x => x.title !== title)
    if (notesToKeep.length === notes.length){        
        console.log(chalk.bgRed('no note found!'))
    }
    else{
        console.log(chalk.bgGreen('note removed!'))
        savenotes(notesToKeep)
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter(x => x.title === title) //return a subset of the starting array, all the value that return true 
    const duplicateote = notes.find(x => x.title === title)
    if (!duplicateote){ //same as checking for undefined
        notes.push({
            body : body,
            title : title
        })    
        savenotes(notes)
        console.log('New Note added')
    } 
    else{
        console.log("Note's title already taken")
    }   
}

const savenotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        var dataJson = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataJson)
    }
    catch (e)  {
        console.log(e)
        return []
    }
}

const readNotes = (title) => {
    debugger
    // to enable debugger we need to start the program with inspect option
    // node inspect app.js read --title="ztl zone"
    //the use open chrome to page: chrome://inspect
    //Add folder to workspace to load all your files
    //one we have complete a test run we can repeat it sunig command restart
    //to exit use ctrl+c twice to reset terminal
    const allNotes = loadNotes()
    const note = allNotes.find(x => x.title===title)
    if (note){
        console.log(chalk.inverse('title = ' + note.title))
        console.log('body = ' + note.body)
    }
    else
        console.log(chalk.red.inverse("Not not found!!!!"))
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}