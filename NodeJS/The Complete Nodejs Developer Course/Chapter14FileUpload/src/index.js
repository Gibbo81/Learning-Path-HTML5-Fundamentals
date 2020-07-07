//to start => npm run dev

const multer = require('multer')
const express = require('express')
const app = express()
const upload = multer({
    dest: 'files'  //folder where to save downloaded files
})

app.use(express.json()) //parse incoming data as json automatically
const port = process.env.PORT || 3000 //heroku web configurarion

//the middlaware {upload.single('upload')} is used to recover the file
//upload is the name of the body parameter key where the file is
app.post('/upload', upload.single('upload') , (req, res) => {

    res.send();
})

//start application
app.listen(port, () => { 
    console.log('server is up')
})

