//to start => npm run dev
//add environment configuration using npm: env-cmd
//aggiunto file ./config/dev.env ed inserita configurazione in package.json
//configuration are all UPPERCASE separeted by underscore _
//to access variable PORT use command: process.env.PORT
const  express = require('express')

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


const port = process.env.PORT
//start application
app.listen(port, () => { 
    console.log('server is up on port '+ port)
})

