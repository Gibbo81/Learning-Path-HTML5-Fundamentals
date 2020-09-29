const express = require('express')
const Task = require('../models/task')
const authMiddlaware = require('../middleware/auth')

const router = new express.Router()

//get: /tasks?limit=10&skip=1&completed=true&sortBy=createdAt:desc
router.get('/tasks', authMiddlaware, async (req, res) =>{
    try{
        var filter = {owner : req.user._id}
        if (req.query.completed)
            filter.completed = req.query.completed            
        var pagination = preparePagination(req.query)      
        var tasks = await Task.find(filter, null, pagination).sort(sortFilter(req.query))
        res.send(tasks)
    }
    catch(e){
        res.status(500).send()
    }
})

function sortFilter(query){
    var sortFilter = {}
    if (query.sortBy){
        var pars = query.sortBy.split(':')  
        sortFilter[pars[0]]=pars[1]
    }    
    return sortFilter
}

function preparePagination(query){
    var pagination = {}
    if (query.skip)
        pagination.skip = parseInt(query.skip)
    if (query.limit)
        pagination.limit = parseInt(query.limit)    
    return pagination;
}

router.get('/tasks/:id', authMiddlaware, async (req, res) =>{       
    try{
        //var task = await Task.findById(req.params.id)
        var task = await Task.findOne({ _id : req.params.id, owner : req.user._id})
        if (!task)                      
            return res.status(404).send()
        res.send(task)
    }
    catch(e){
        res.status(500).send()
    }
})

router.post('/tasks', authMiddlaware, async (req, res) => {
    try{        
        const u = new Task({
            ...req.body, //copy all the data from body
            owner : req.user._id
        })
        console.log('new task: ', u)
        await u.save()
        res.status(201).send(u)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.patch('/tasks/:id', authMiddlaware, async (req, res) => {    
    const allowedUpdates = ['description','completed']
    const updates = Object.keys(req.body)
    const isvalidOperation = updates.every(update => allowedUpdates.includes(update))
    if(!isvalidOperation)
        return res.status(400).send( {error : 'Invalid Update!!!!'})

    try {
        //const task = await Task.findById(req.params.id) //without authMiddlaware
        var task = await Task.findOne({ _id : req.params.id, owner : req.user._id})
        if (!task) 
            return res.status(404).send()
        updates.forEach( update => task[update] = req.body[update])
        await task.save()
        // const task = await Task.findByIdAndUpdate(req.params.id, 
        //                                           req.body, 
        //                                           {
        //                                               new : true,         
        //                                               runValidators:true  
        //                                           })                
        res.send(task)                                            
    }
    catch(e){        
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', authMiddlaware, async (req, res) =>{ 
    try{
        await Task.findOneAndDelete({ _id : req.params.id, owner : req.user._id})
        res.status(204).send()
    }    
    catch(error) {
        res.status(500).send()
    }
})

module.exports = router