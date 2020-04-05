const request = require('request')
const geocode =  require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


//node app.js "New York"
//node app.js Bologna

const urlWeather ='https://api.darksky.net/forecast/51c13b1fe2e91b6e6e9b9fff61480e8a/37.8267,-122.4233?units=si&lang=it'
const urlWeatherWrong ='https://api.darksky.net/forecast/51c13b1fe2e91b6e6e9b9fff61480e8a/37.8267,iokmkj.4233?units=si&lang=it'

const mapbox =     'https://api.mapbox.com/geocoding/v5/mapbox.places/Bologna.json?access_token=pk.eyJ1IjoiZ2liYm8yMDAxIiwiYSI6ImNrN3ZwZHB4bTBiN2czb3FxcjlvNmcxeWYifQ.rbh4A_0f-7spr9v6kSI1Xw&limit=1'
const mapboInvalidToken ='https://api.mapbox.com/geocoding/v5/mapbox.places/Bologna.json?access_token=pk.eyJ1IjoiZ2liYm8yMDAxI.rbh4A_0f-7spr9v6kSI1Xw&limit=1'

//single API call
/*
request({ 
        url: mapbox,
        json: true    //automatically parse the response body from json to object
    }, (error, response) => {   //only one of the two is populated, error is only used for connection problem
        if(error)
            console.log('Unable to connect to map api')
        else if (response.statusCode !== 200)
            console.log('Error on map api: '+ response.statusCode + ' body: '+ JSON.stringify(response.body))
        else  
            console.log('Latitude: ' +  response.body.features[0].center[1] + ' Longitude: ' +  response.body.features[0].center[0])
})

request({ 
        url: urlWeather,
        json: true    
    }, (error, response) => {
        if(error)
            console.log('Unable to connect to weather api')
        else if (response.statusCode !== 200)
            console.log('Error on map api: '+ response.statusCode + ' body: '+ JSON.stringify(response.body))
        else  
            console.log(response.body.daily.data[0].summary + " It's currently " + response.body.currently.temperature + " degrees out. There's " + response.body.currently.precipProbability + '% chance of rain.')
})
*/


//combine API call  
if (!process.argv[2])
    return console.log('Missing location parameter') 

//With callback pattern it's common to use 2 parameters error and data. common convention
geocode(process.argv[2], (error, data) =>{  //error and data are mutually exsclusive, we always receive only one 
    if (error)
        return console.log('Geo error ', error)
    console.log('Geo data ', data)
    forecast(data.latitude, data.longitude, (error, dataForecast) =>{  
        if (error)
            return console.log('fore error ', error)
        console.log('Place: ' + data.location)
        console.log('fore data ', dataForecast)
    })
})


