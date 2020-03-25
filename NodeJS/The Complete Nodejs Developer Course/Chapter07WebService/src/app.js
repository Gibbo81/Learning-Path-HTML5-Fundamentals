//to start: nodemon src/app.js

const express = require('express')   //this npm only exposes a single function not an object
const path = require('path')        //core module no npm

console.log(__dirname)          //directory where the script that the application
console.log(path.join(__dirname, '../public'))  //we need the ABSOLUTE location for file index.html

const app = express()  //to obtain our application 

app.use(express.static(path.join(__dirname, '../public'))) //configure our express application to use a static folder
//index.html has a special meaning in web and serve as defalt page
//public is the only directory exposed to the server
//this will override the default configuration ==> res.send('<h1>Weater</h1>')


//what to do if someone visit our homepage : app.com
//1° parameter relative route
//2° parameter callback used to responde
//NOT USED ONLY for example purpose
app.get('', (req, res) => {  //
    res.send('<h1>Weater</h1>')
}) 

/*
//NOT USED ONLY for example purpose
//different route app.com/help
app.get('/help', (req, res) => {
    res.send([{
        name : 'giuliano',
        age : 38
    }])
})

//NOT USED ONLY for example purpose
// app.com/about
app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})
*/

// weather.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast : 'All is good and nice',
        location : 'Italy'
    })
})

//start the server, it will stay up until we stop it (ctr + c)
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})