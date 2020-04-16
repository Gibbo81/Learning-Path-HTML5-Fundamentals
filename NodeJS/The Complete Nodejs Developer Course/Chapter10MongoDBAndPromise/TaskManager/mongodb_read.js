//To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data

const mongodb = require('mongodb')

const connection = 'mongodb://127.0.0.1:27017'
const dbName = "task-manager"

const MongoClient = mongodb.MongoClient


MongoClient.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
    if(error)
        return console.log('Unable to connect to the DB')

    const db = client.db(dbName)
    db.collection('users').findOne({name: 'Saras', age : 38}, (error, user) =>{
        if(error)
            return console.log('Unable to read user')
        
        console.log(user)
    })

    //o search by object ID 5e95e26ff3182b0f9486fbab we can not use a string but need to create anobject id
    db.collection('users').findOne({_id: new mongodb.ObjectID('5e95e26ff3182b0f9486fbab')}, (error, user) =>{
        if(error)
            return console.log('Unable to read user')
        
        console.log(user)
    })

    //user not found
    db.collection('users').findOne({name: 'GDSDGASGASG'}, (error, user) =>{
        if(error)
            return console.log('Unable to read user')
        
        console.log(user)   //return null
    })

    //search multiple document using 'find'. It returns a cursor to improve performance, we will call toArray on it
    db.collection('users').find({name: 'Giuliano'}).toArray((error, users) =>{
        if(error)
            return console.log('Unable to read user')
        
        console.log(users)   
    })

    db.collection('users').find({age: 134}).count((error, count) =>{
        if(error)
            return console.log('Unable to read user')
        
        console.log(count)   
    })

    const user = db.collection('tasks')
    user.findOne({_id :  new mongodb.ObjectID('5e97f8bebbc350058c8c5ed7')}, (error, task) => {
        if(error)
            return console.log('Unable to read user')
        
        console.log(task)   
    })
    user.find({completed : false}).toArray((error, tasks) =>{
        if(error)
            return console.log('Unable to read user')
        
        console.log(tasks)   
    })
})