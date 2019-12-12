const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const dupNotes = notes.find( (note) => note.title === title )

    if (!dupNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }   
}

const removeNote = (title) => {
    const notes = loadNotes()

    const noteToKeep = notes.filter( (note) => note.title !== title )

    if( notes.length > noteToKeep.length ) {
        saveNotes(noteToKeep)
        console.log( chalk.green.inverse('Note ' + title + ' has been removed!' ))
    } else {
        console.log( chalk.red.inverse('Couldn\'t find a note named ' + title ))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log( chalk.yellow.inverse('Your notes') )
    notes.forEach(noteItem => {
        console.log('- ' + noteItem.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find( (note) => note.title === title )

    if (note) {
        console.log( chalk.gray.inverse(note.title))
        console.log( note.body)
    } else {
        console.log( chalk.red.inverse('Note not found!') )
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}