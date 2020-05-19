const express = require('express')
const Task = require('../models/task')

const router = new express.Router()

router.get('/tasks' , async (req, res) =>{
    try{
        var tasks = await Task.find({})     
        res.send(tasks)
    }
    catch(e){
        res.status(500).send()
    }
})

router.get('/tasks/:id' , async (req, res) =>{       
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

router.post('/tasks' , async (req, res) => {
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

router.patch('/tasks/:id', async (req, res) => {    
    const allowedUpdates = ['description','completed']
    const updates = Object.keys(req.body)
    const isvalidOperation = updates.every(update => allowedUpdates.includes(update))
    if(!isvalidOperation)
        return res.status(400).send( {error : 'Invalid Update!!!!'})

    try {
        const task = await Task.findById(req.params.id)
        updates.forEach( update => task[update] = req.body[update])
        await task.save()
        // const task = await Task.findByIdAndUpdate(req.params.id, 
        //                                           req.body, 
        //                                           {
        //                                               new : true,         
        //                                               runValidators:true  
        //                                           })        
        if (!task) 
            return res.status(404).send()
        res.send(task)                                            
    }
    catch(e){        
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id' , async (req, res) =>{ 
    try{
        await Task.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }    
    catch(error) {
        res.status(500).send()
    }
})

module.exports = router