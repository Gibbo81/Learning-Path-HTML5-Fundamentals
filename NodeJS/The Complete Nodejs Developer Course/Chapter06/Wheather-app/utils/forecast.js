const request = require('request')

const weather = (lan, log , callback) => {
    const urlWeather ='https://api.darksky.net/forecast/51c13b1fe2e91b6e6e9b9fff61480e8a/' + lan + ',' + log + '?units=si&lang=it'
    request({ 
        url: urlWeather,
        json: true    
    }, (error, response) => {
        if(error)
            callback('Unable to connect to weather api')
        else if (response.statusCode !== 200)
            callback('Error on map api: '+ response.statusCode + ' body: '+ JSON.stringify(response.body))
        else  
            callback(undefined, {
                summary : response.body.daily.data[0].summary,
                precipProbability : response.body.currently.precipProbability,
                temperature : response.body.currently.temperature
            })
    })}

module.exports = weather