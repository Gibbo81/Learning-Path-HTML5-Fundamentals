const request = require('request')

const weather = (lan, log , callback) => {
    const url ='https://api.darksky.net/forecast/51c13b1fe2e91b6e6e9b9fff61480e8a/' + lan + ',' + log + '?units=si&lang=it'
    request({ 
        url, //use of object property shorthand syntax as in playground => 5-es-objects.js
        json: true    
    }, (error, {statusCode, body}) => {  //use of destructuring as in playground => 5-es-objects.js
        if(error)
            callback('Unable to connect to weather api')
        else if (statusCode !== 200)
            callback('Error on map api: '+ statusCode + ' body: '+ JSON.stringify(body))
        else  
            callback(undefined, {
                summary : body.daily.data[0].summary,
                precipProbability : body.currently.precipProbability,
                temperature : body.currently.temperature
            })
    })}

module.exports = weather