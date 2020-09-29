/*
To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data
*/
const mongodb = require('mongodb')
const connection = 'mongodb://127.0.0.1:27017'
const dbName = "task-manager"

const MongoClient = mongodb.MongoClient

//connection is asynchronous operation so we use a call back
MongoClient.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
    if(error)
        return console.log('Unable to connect to the DB')
    
    console.log('Connected to Mongo DB')
    //after creating connection the program will continue to run until we stop it (ctr + c)

    const db = client.db(dbName)
    db.collection('users').insertOne({
        name : 'Giuliano',
        age :38 
    }, (error, result) => {
        if (error)
            return console.log('Error inserting an user')
        console.log(result.ops)
    })

    db.collection('users').insertMany([
            { name : 'pippus', age :134 },
            { name : 'plutus', age :256 }
        ], (error, result) => {
        if (error)
            return console.log('Error inserting many users')
        console.log(result.ops)
    })
})

MongoClient.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
    if(error)
        return console.log('Unable to connect to the DB')
    
    const db = client.db(dbName)
    db.collection('tasks').insertMany([
        {description : 'starting', completed : true},
        {description : 'running',  completed : true},
        {description : 'ending',   completed : false}
    ], (error, result) => {
        if (error)
            return console.log('Unable to insert tasks')
        console.log(result.ops)
    })
})