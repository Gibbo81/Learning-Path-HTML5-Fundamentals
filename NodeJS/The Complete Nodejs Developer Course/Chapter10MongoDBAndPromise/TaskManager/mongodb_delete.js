//To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data

const mongodb = require('mongodb')

const connection = 'mongodb://127.0.0.1:27017'
const dbName = "task-manager"

const MongoClient = mongodb.MongoClient


MongoClient.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
    if(error)
        return console.log('Unable to connect to the DB')

    const db = client.db(dbName)

    db.collection('users').deleteMany({
        age : 134
    }).then(result => {
        console.log('result: ',result )
    }).catch(error => {
        console.log(error)
    })

    db.collection('tasks').deleteOne({
        _id : new mongodb.ObjectID('5e97f8bebbc350058c8c5ed5')
    }).then(result => {
        console.log('result one: ',result )
    }).catch(error => {
        console.log(error)
    })

    
})