const express = require('express')

const app = express()
app.use(express.json()) //parse incoming data as json automatically


app.get('/try', async (req, res) =>{
    try{        
        res.send({
            name : 'pippo',
            age : 66
        })
    }
    catch (e){
        res.status(500).send({ error : e.message})
    }
})

app.post('/try', async (req, res) =>{
    try{  
        if (!req.body.name || !req.body.age)
            return res.status(400).send({ reason : 'missing part'})
        res.status(201).send({age :req.body.age})
    }
    catch (e){
        res.status(500).send({ error : e.message})
    }
})

module.exports = app