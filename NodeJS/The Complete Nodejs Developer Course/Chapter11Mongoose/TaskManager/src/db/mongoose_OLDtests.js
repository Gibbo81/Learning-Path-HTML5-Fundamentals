/*
To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data
*/
const mongoose = require('mongoose')        //orm for mongodb
const validator = require('validator')
const connection = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connection, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

//for the collection name mongoose takes the model name (User) converts to lower case ad pluralizes it users
const User = mongoose.model('User', {
    name: { 
        type: String,
        required : true,
        trim: true
    },
    email :{
        type : String,
        required: true,
        lovercase: true,
        validate(value){
            if (!validator.isEmail(value))
                throw new Error('invalid mail', value)
        }
    },
    password :{
        type : String,
        required : true,
        trim : true,
        validate(value){
            if (value.toLowerCase().includes('password') || (value.length < 7))
                throw new Error('invalid password')
        }
    },
    age: { 
        type: Number ,
        default: 18,
        validate(value){
            if(value <18)
                throw new Error('Need grater age')
        }
        // validate : (value) =>{       //same result only different syntax
        //     if(value <18)
        //         throw new Error('Need grater age')
        // }
    }
})
const Task = mongoose.model('Task', {
    description : {
        type : String,
        trim: true,
        required: true
    },
    completed :{
        type : Boolean,
        default : false
    }
})

const validUser = new User({
    password : '123perty35', 
    name : 'Marco', 
    email : 'h323ildfr@gmail.com'
})
const invalidUser = new User({ 
    password : '123paSsword35', 
    name : 'Giuliano', 
    age : 22,
    email : 'hildfr@gmail.com'
}) 
validUser.save()       //return a promise
  .then((result) => {
      console.log(result)       //print { _id: 5e9e9825345d6311f80009cb, name: 'Giuliano', age: 38, __v: 0 }
  })                            // __v is managed by mongoose and it's the version 
  .catch((error) =>{
      console.log('Error: ',    error)
  })

const task01 = new Task({description : 'An incredible table'})
const invalidTask01 = new Task({ completed : true})
task01.save()
.then((result) => {
    console.log(result)
})                  
.catch((error) =>{
    console.log('Error: ',    error)
})