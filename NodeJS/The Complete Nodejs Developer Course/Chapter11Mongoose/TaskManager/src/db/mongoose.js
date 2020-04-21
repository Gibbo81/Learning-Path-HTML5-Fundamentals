/*
To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data
*/
const mongoose = require('mongoose')        //orm for mongodb
const connection = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connection, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

//for the collection name mongoose takes the model name (User) converts to lower case ad pluralizes it users
const User = mongoose.model('User', {
    name: { 
        type: String 
    },
    age: { 
        type: Number 
    }
})
const Task = mongoose.model('Task', {
    description : {
        type : String
    },
    completed :{
        type : Boolean
    }
})

const me = new User({ name : 'Giuliano', age : 38})
me.save()       //retrun a promise
  .then((result) => {
      console.log(me)       //print { _id: 5e9e9825345d6311f80009cb, name: 'Giuliano', age: 38, __v: 0 }
  })                        // __v is managed by mongoose and it's the version 
  .catch((error) =>{
      console.log('Error: ',    error)
  })

const task01 = new Task({description : 'A new hope', completed : true})
task01.save()
.then((result) => {
    console.log(result)
})                  
.catch((error) =>{
    console.log('Error: ',    error)
})