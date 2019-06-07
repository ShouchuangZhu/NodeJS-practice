const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')


//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    },
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    },
})

yargs.command({
    command: 'list',
    describe: 'List the note',
    handler(){
        notes.listNote()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder:{
        title:{
            describe: 'This is title',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    },
})



console.log(yargs.argv)