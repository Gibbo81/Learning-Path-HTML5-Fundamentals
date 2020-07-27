const express = require('express')

const app = express()
app.use(express.json()) //parse incoming data as json automatically


app.get('/try', async (req, res) =>{
    try{        
        res.send({name : 'pippo'})
    }
    catch (e){
        res.status(500).send({ error : e.message})
    }
})

app.post('/try', async (req, res) =>{
    try{  
        if (!req.body.name || !req.body.age)
            res.status(400)
        res.status(201).send({age :req.body.age})
    }
    catch (e){
        res.status(500).send({ error : e.message})
    }
})

module.exports = app