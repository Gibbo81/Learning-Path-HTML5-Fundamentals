const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => 'Your Notes...' 

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
    const duplicateNotes = notes.filter(x => x.title === title) //return a subset of the starting array, all the value that return true 
    if (duplicateNotes.length === 0){
        notes.push({
            body : body,
            title : title
        })    
        savenotes(notes)
        console.log('New Note added')
    } 
    else{
        console.log("Note's title already taken")
        console.log('duplicate: ' + JSON.stringify(duplicateNotes))
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

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
}