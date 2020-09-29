//To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data

const mongodb = require('mongodb')

const connection = 'mongodb://127.0.0.1:27017'
const dbName = "task-manager"

const MongoClient = mongodb.MongoClient


MongoClient.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
    if(error)
        return console.log('Unable to connect to the DB')

    const db = client.db(dbName)
    
    db.collection('users').updateOne({
        _id : new mongodb.ObjectID('5e96ac76cee62115c4092b88')
    }, {
        $set:{
            name : 'Changed_s'
        }            
    }).then((result) =>{
        console.log(result.modifiedCount, result.matchedCount)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').updateOne({
        _id : new mongodb.ObjectID('5e97f8bebbc350058c8c5eda')
    }, {
        $inc:{
            age : -1000
        },
        $set: {
            name : 'DoublePower_name3'
        }            
    }).then((result) =>{
        console.log(result.modifiedCount, result.matchedCount)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').updateMany({
        completed : false
    }, {
        $set:{
            completed : true
        }            
    }).then((result) =>{
        console.log(result.modifiedCount, result.matchedCount)
    }).catch((error) => {
        console.log(error)
    })
})