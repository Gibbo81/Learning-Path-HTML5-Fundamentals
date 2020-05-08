//to start => npm run dev
//To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data
//taken from package.json - script - dev

const express = require('express')
require('./db/mongoose')    //we do not take data from this files, it's only made to unsere that mongoose starts and connects to DB
const userRoutes = require('./routers/userRouters')
const taskRoutes = require('./routers/taskRouters')

const app = express()
app.use(express.json()) //parse incoming data as json automatically
const port = process.env.PORT || 3000 //heroku web configurarion

app.use(userRoutes)
app.use(taskRoutes) 

//start application
app.listen(port, () => { 
    console.log('server is up')
})

