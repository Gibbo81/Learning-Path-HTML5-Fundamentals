//to start: nodemon src/app.js

const express = require('express')   //this npm only exposes a single function not an object
const path = require('path')        //core module no npm
const geocode =  require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


console.log(__dirname)          //directory where the script that the application
console.log(path.join(__dirname, '../public'))  //we need the ABSOLUTE location for file index.html

const app = express()  //to obtain our application 

//For learning purpose
app.get('/products', (req, res) => {
    console.log(req.query)
    if(!req.query.search){  //manage mandatory fields
        return res.status(400).send({   //with return the rest of he code is not executed
            error : 'search information is mandatory'
        })
    }
    res.send({
     products : []
    })
})

// weather.com/weather
app.get('/weather', (req, res) => {
    if (!req.query.address){
        return res.status(400).send({  
            error : 'address is mandatory'
        })
    }

    geocode(req.query.address, (error, data) =>{  
        if (error)
            return res.status(500).send({  
                error : 'Error calling gerocode'
            })
        console.log('Geo data ', data)
        forecast(data.latitude, data.longitude, (error, dataForecast) =>{  
            if (error)
                return res.status(500).send({  
                    error : 'Error calling forecast'
                })
            res.send({
                forecast : dataForecast.summary,
                location : data.location,
                address : req.query.address
            })    
        })
    })
})

//start the server, it will stay up until we stop it (ctr + c)
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})