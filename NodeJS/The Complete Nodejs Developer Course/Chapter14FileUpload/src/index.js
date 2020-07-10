//to start => npm run dev


//tanta roba sicuramente da segnare nella mia guida
//come prendere una libreria che lavora 'solo' a call back e chiamarla con await in maniera nativa!
const { promisify } = require('util')  //native library
const multer = require('multer')
const express = require('express')
const app = express()
fs = require('fs');
const writeFileAsync = promisify(fs.writeFile)

app.use(express.json()) //parse incoming data as json automatically
const port = process.env.PORT || 3000 //heroku web configurarion

const upload = multer({
    dest: 'files',  //folder where to save downloaded files
    limits :{
        fileSize : 100000000 //maximal file dimension (in bytes)
    },
    fileFilter : (req, file , cb) => {  //function executed when a new file arrives to decide if it's valid or not
        if(file.originalname.endsWith('.mkv') || file.originalname.endsWith('.mp4'))
            return cb(undefined, true) //file accepted
        cb(new Error('Invalid file'));  //send back an error - bad file rejected        
    }
})
//if i want to elaborae the file inside the API simple reove 'dest' configuration
const uploadInsideAPI = multer({
    limits :{
        fileSize : 100000000 //maximal file dimension (in bytes)
    },
    fileFilter : (req, file , cb) => {  //function executed when a new file arrives to decide if it's valid or not
        if(file.originalname.endsWith('.mkv') || file.originalname.endsWith('.mp4'))
            return cb(undefined, true) //file accepted
        cb(new Error('Invalid file'));  //send back an error - bad file rejected        
    }
})

//the middlaware {upload.single('upload')} is used to recover the file
//upload is the name of the body parameter key where the file is
app.post('/upload', upload.single('upload') , (req, res) => {
    res.send();
}, (error, req, res, next) =>{   //callback toi use when error arrives 
    res.status(400).send({ error : error.message})
})

app.post('/uploadInsideAPI', uploadInsideAPI.single('upload') , async (req, res) => {
    console.log(req.file)
    try{
        await writeFileAsync('./files/'+req.file.originalname, req.file.buffer)
        res.send();
    }
    catch (e){
        res.status(500).send({ error : e.message})
    }
}, (error, req, res, next) =>{   
    res.status(400).send({ error : error.message})
})

// se volessi multiple handler semplivemente li aggiunerei tutti alla chiamata
//app.post('/upload', middleware1, middleware12,  upload.single('upload') , (req, res) => {


//start application
app.listen(port, () => { 
    console.log('server is up')
})

