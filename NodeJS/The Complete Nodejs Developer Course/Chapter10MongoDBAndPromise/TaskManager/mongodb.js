const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


const connection = 'mongodb://127.0.0.1:27017'
const dbName = "task-manager"

//connection is asynchronous operation so we use a call back
MongoClient.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
    if(error)
        return console.log('Unable to connect to the DB')
    
    console.log('Connected to Mongo DB')
    //after creating connection the programm will continue to run untill we stop it (ctr + c)

    const db = client.db(dbName)
    db.collection('users').insertOne({
        name : 'Giuliano',
        age :38 
    })

})

