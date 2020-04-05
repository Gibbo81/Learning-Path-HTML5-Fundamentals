const request = require('request')

const weather = (lan, log , callback) => {
    const url ='https://api.darksky.net/forecast/51c13b1fe2e91b6e6e9b9fff61480e8a/' + lan + ',' + log + '?units=si&lang=it'
    request({ 
        url, //use of object property shorthand syntax as in playground => 5-es-objects.js
        json: true    
    }, (error, data) => {  //use of destructuring as in playground => 5-es-objects.js
        if(error)
            callback('Unable to connect to weather api')
        else if (data.statusCode !== 200)
            callback('Error on map api: '+ data.statusCode + ' body: '+ JSON.stringify(data.body))
        else  
            callback(undefined, {
                summary : data.body.daily.data[0].summary,
                precipProbability : data.body.currently.precipProbability,
                temperature : data.body.currently.temperature
            })
    })}

module.exports = weather