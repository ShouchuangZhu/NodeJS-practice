const fs = require('fs')
const chalk = require('chalk')
const getNote = () => {
    return 'woooo'
}
// --------------------add notes-----------------------//
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
   
}
const removeNote = (title) => {
    const notes = loadNotes()
    const noteTitle = notes.filter((note)=> {
        return note.title !== title;
    })
    if (notes.length > noteTitle.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(noteTitle)
    } else {
        console.log(chalk.red.inverse('No such title!'))
    }
    
}

// --------------------remove notes-----------------------//
module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
}