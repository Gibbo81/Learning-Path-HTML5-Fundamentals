/*
To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data
*/
const mongoose = require('mongoose')        //orm for mongodb
const connection = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connection, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify :false
})
