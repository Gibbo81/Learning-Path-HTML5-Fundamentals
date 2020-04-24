//to start => npm run dev
//To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data
//taken from package.json - script - dev

const express = require('express')

const app = express()
app.use(express.json()) //parse incoming data as json automatically
const port = process.env.PORT || 3000 //heroku web configurarion

app.post('/users' , (req, res) => {
    console.log(req.body)
    res.send('{"Testing":"ok"}')
})

//start application
app.listen(port, () => {
    console.log('server is up')
})



