//to start => npm run dev
//To start mongoDB server: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb\DB_Data
//taken from package.json - script - dev

const express = require('express')
require('./db/mongoose')    //we do not take data from this files, it's only made to unsere that mongoose starts and connects to DB
const userRoutes = require('./routers/userRouters')
const taskRoutes = require('./routers/taskRouters')
const app = express()

//middlaware function used to make some work before the correct handler starts elaborating
//useful to check permission - valid for all the controlers
/* moved into auth.js
app.use((req, res, next) =>{
    console.log(req.method, req.path)//it has access to al the request options
    if (req.method === 'GET'){
        res.status(503).send("Get are disable, back online soon");
    }
    next() //to run the right handler, the middlaware completed its job. If we do not call it or send a response res.status(503).send(...) the request is stuck untill the timeout expire
})
*/


app.use(express.json()) //parse incoming data as json automatically
const port = process.env.PORT || 3000 //heroku web configurarion
app.use(userRoutes)
app.use(taskRoutes) 

//start application
app.listen(port, () => { 
    console.log('server is up')
})


//new
const bcrypt = require('bcryptjs')
//new
const myFunctionTestbcrypt  = async () => {
    const pass = 'Green6789!'
    const hashPassword = await bcrypt.hash(pass, 8) //8 is the number of rounds used to create the hash
    console.log(hashPassword)
    //bcrypt has a method to check if a text field matches wit an hash code:
    const isMatch = await bcrypt.compare('Green6789!', hashPassword)
    console.log(isMatch)
}
myFunctionTestbcrypt()

//new
const jwt = require('jsonwebtoken')
const myFunctionTestjwt  = async () => {
    //sign takes 3 parameters: an object with the information to store in the token, 
    //a secret used to sign the token and
    //an object with customize option (es: token duration time)
    const token = jwt.sign({_id: 'abc1223', age:12}, 'thisismynewtoken', {expiresIn : '7 days'})
    console.log('token: ', token)
    const data = jwt.verify(token, 'thisismynewtoken') //if correct returns a json with token data otherwise throws an exception
    console.log('data: ', data)
}
myFunctionTestjwt()
//online web token reader : https://jwt.io/
 