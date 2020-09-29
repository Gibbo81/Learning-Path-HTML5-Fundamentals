const express = require('express')
const User = require('../models/user')
const authMiddlaware = require('../middleware/auth')

//new Jsonwebtoken
const router = new express.Router()

router.get('/test', (req,res) => {
    res.send("this is another test router, different files")
})

//2° parameter is the middleware for this specific route
//this is not secure, with a token you can read all the users not only yourself
router.get('/users', authMiddlaware, async (req, res) =>{
    try{
        var user = await User.find({})
        res.send(user)
    }    
    catch(error) {
        res.status(500).send()
    }
})

//this return only your user (taken from token)
router.get('/users/me', authMiddlaware, async (req, res) =>{
    res.send(req.user)
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
        const user = new User(req.body)        
        await user.save()
        const token = await user.generateToken()
        res.status(201).send({user, token})
    }
    catch(e){
        res.status(400).send(e) 
    }
})

//NEW
router.post('/users/login',async (req, res) =>{
    try{
        const user = await User.findByCredential(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.send({user: user.getPublicProfile(), token})
    }
    catch(e){
        res.status(400).send()
    }
})

router.post('/user/logout', authMiddlaware, async (req,res) => {
    try{
        req.user.token = req.user.token.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch(e){
        res.status(500).send()
    }
})

router.post('/user/logoutAll', authMiddlaware, async (req,res) => {
    try{
        req.user.token = []
        await req.user.save()
        res.send()
    } catch(e){
        res.status(500).send()
    }
})

//old
router.delete('/users/:id' , async (req, res) =>{ 
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }    
    catch(error) {
        res.status(500).send()
    }
})
//new with security
router.delete('/users/me', authMiddlaware, async (req, res) =>{ 
    try{
        await req.user.remove
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
        /*this bypass mongoose so we remove it :-(
        const user = await User.findByIdAndUpdate(req.params.id, 
                                            req.body, 
                                            {
                                                new : true,         //return the updated user
                                                runValidators:true  //run the validator on the req.body data
                                            })*/
        const user = await User.findById(req.params.id)
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        
        if (!user) //no user to update
            return res.status(404).send()
        res.send(user)                                            
    }
    catch(e){        
        res.status(400).send(e)
    }
})

//new: with authentication
router.patch('/users/:id', authMiddlaware, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isvalidOperation = updates.every(update => allowedUpdates.includes(update))
    if(!isvalidOperation)
        return res.status(400).send( {error : 'Invalid Update!!!!'})

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)                                            
    }
    catch(e){        
        res.status(400).send(e)
    }
})

module.exports = router