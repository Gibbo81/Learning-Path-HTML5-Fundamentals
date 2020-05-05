//to start => npm run dev
//To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data
//taken from package.json - script - dev

const express = require('express')
require('./db/mongoose')    //we do not take data from this files, it's only made to unsere that mongoose starts and connects to DB
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
app.use(express.json()) //parse incoming data as json automatically
const port = process.env.PORT || 3000 //heroku web configurarion


app.get('/users' , (req, res) =>{
    User.find({}) //fetch all user with {}
        .then((response) => {
            res.send(response)
        })
        .catch((error) =>{
            res.status(500).send()
        }) 
})

app.get('/tasks' , (req, res) =>{
    Task.find({}) 
        .then((response) => {
            res.send(response)
        })
        .catch((error) =>{
            res.status(500).send()
        }) 
})

app.get('/users/:id' , (req, res) =>{       // :id is the same of c# {id}. They go in req.params
    console.log(req.params);
    User.findById(req.params.id)            //fetch all user with {}
        .then((user) => {            
            if (!user)                      //it doesn't give back an error if the user is not found
                return res.status(404).send()
            res.send(user)
        })
        .catch((error) =>{
            res.status(500).send()
        }) 
})

app.get('/tasks/:id' , (req, res) =>{       
    Task.findById(req.params.id)            
        .then((task) => {            
            if (!task)                      
                return res.status(404).send()
            res.send(task)
        })
        .catch((error) =>{
            res.status(500).send()
        }) 
})

app.post('/users' , (req, res) => {
    console.log('new user: ', req.body)
    const u = new User(req.body)
    u.save().then(() => {
        res.status(201).send(u)
    }).catch((e)=>{
        res.status(400).send(e) 
    })
})

app.post('/tasks' , (req, res) => {
    console.log('new task: ', req.body)
    const u = new Task(req.body)
    u.save().then(() => {
        res.status(201).send(u)
    }).catch((e)=>{
        res.status(400).send(e) 
    })
})

//start application
app.listen(port, () => { 
    console.log('server is up')
})



