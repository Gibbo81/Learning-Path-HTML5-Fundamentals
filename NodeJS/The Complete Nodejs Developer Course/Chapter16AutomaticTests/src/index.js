/*
jest test framework, it's installed only locally : npm i jest --save-dev
add a new script in package.json --> "test":"jest"
To run the test simple 'npm test' inside the terminal
*/


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

