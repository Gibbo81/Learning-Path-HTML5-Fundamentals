const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.get('/test', (req,res) => {
    res.send("this is another test router, different files")
})

router.get('/users' , async (req, res) =>{ //change the return type to promise, but express doesn't use this return type and instead use req and res to take the result
    try{
        var user = await User.find({})
        res.send(user)
    }    
    catch(error) {
        res.status(500).send()
    }
})

router.get('/users/:id' ,async (req, res) =>{       // :id is the same of c# {id}. They go in req.params
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

router.post('/users' , async (req, res) => {
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

router.delete('/users/:id' , async (req, res) =>{ 
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }    
    catch(error) {
        res.status(500).send()
    }
})

router.patch('/users/:id', async (req, res) => {
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

module.exports = router