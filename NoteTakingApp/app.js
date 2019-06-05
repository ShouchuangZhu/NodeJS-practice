const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')


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
        console.log('Title: ' +  argv.title)
    },
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => {
        console.log('Removing a new note!')
    },
})

yargs.command({
    command: 'list',
    describe: 'List the note',
    handler: () => {
        console.log('Listing the note!')
    },
})

yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: () => {
        console.log('Reading the note!')
    },
})



console.log(yargs.argv)