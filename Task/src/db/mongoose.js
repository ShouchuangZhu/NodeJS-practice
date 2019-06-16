const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User',{
    name: {
        type: String
        
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"!')
            }
        }
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Andrie',
    age: 27,
    email:'realy@gmail.com',
    password: 'bs8ddsadsadas'
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!', error)
})

const Task = mongoose.model('Task', {
    decription: {
        type: String
    },
    completed: {
        type: Boolean,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a postive number')
            }
        }
    }
})

const task = new Task({
    description: 'Learn the Mongoose library',
    completed: false
})

task.save().then(()=>{
    console.log(task)
}).catch(()=>{
    console.log(error)
})