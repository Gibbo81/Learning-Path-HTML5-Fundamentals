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


app.get('/users' , async (req, res) =>{ //change the return type to promise, but express doesn't use this return type and instead use req and res to take the result
    try{
        var user = await User.find({})
        res.send(user)
    }    
    catch(error) {
        res.status(500).send()
    }
})

app.get('/users/:id' ,async (req, res) =>{       // :id is the same of c# {id}. They go in req.params
    try{
        console.log(req.params);
        var user = await User.findById(req.params.id)
        if (!user)                
            return res.status(404).send()
        res.send(user)
    }   
    catch(e){
        res.status(500).send()
    } 
})

app.post('/users' , async (req, res) => {
    try{
        console.log('new user: ', req.body)
        const u = new User(req.body)
        await u.save()
        res.status(201).send(u)
    }
    catch(e){
        res.status(400).send(e) 
    }
})

app.delete('/users/:id' , async (req, res) =>{ 
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }    
    catch(error) {
        res.status(500).send()
    }
})

app.patch('/users/:id', async (req, res) => {
    //check if request body is valid
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isvalidOperation = updates.every(update => allowedUpdates.includes(update))
    if(!isvalidOperation)
        return res.status(400).send( {error : 'Invalid Update!!!!'})

    try {
        const user = await User.findByIdAndUpdate(req.params.id, 
                                            req.body, 
                                            {
                                                new : true,         //return the updated user
                                                runValidators:true  //run the validator on the req.body data
                                            })
        if (!user) //no user to update
            return res.status(404).send()
        res.send(user)                                            
    }
    catch(e){        
        res.status(400).send(e)
    }
})

app.get('/tasks' , async (req, res) =>{
    try{
        var tasks = await Task.find({})     
        res.send(tasks)
    }
    catch(e){
        res.status(500).send()
    }
})

app.get('/tasks/:id' , async (req, res) =>{       
    try{
        var user = await Task.findById(req.params.id)            
        if (!user)                      
            return res.status(404).send()
        res.send(user)
    }
    catch(e){
        res.status(500).send()
    }
})

app.post('/tasks' , async (req, res) => {
    try{
        console.log('new task: ', req.body)
        const u = new Task(req.body)
        await u.save()
        res.status(201).send(u)
    }
    catch(e){
        res.status(400).send(e)
    }
})

app.patch('/tasks/:id', async (req, res) => {    
    const allowedUpdates = ['description','completed']
    const updates = Object.keys(req.body)
    const isvalidOperation = updates.every(update => allowedUpdates.includes(update))
    if(!isvalidOperation)
        return res.status(400).send( {error : 'Invalid Update!!!!'})

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, 
                                                  req.body, 
                                                  {
                                                      new : true,         
                                                      runValidators:true  
                                                  })        
        if (!task) 
            return res.status(404).send()
        res.send(task)                                            
    }
    catch(e){        
        res.status(400).send(e)
    }
})

app.delete('/tasks/:id' , async (req, res) =>{ 
    try{
        await Task.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }    
    catch(error) {
        res.status(500).send()
    }
})

//start application
app.listen(port, () => { 
    console.log('server is up')
})

