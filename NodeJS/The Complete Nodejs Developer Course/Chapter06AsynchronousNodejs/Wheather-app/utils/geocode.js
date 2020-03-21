const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ2liYm8yMDAxIiwiYSI6ImNrN3ZwZHB4bTBiN2czb3FxcjlvNmcxeWYifQ.rbh4A_0f-7spr9v6kSI1Xw&limit=1'
    const urlBroken = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ2liYm8yMDAxIiwiYSI6ImNrN3ZcjlvNmcxeWYifQ.rbh4A_0f-7spr9v6kSI1Xw&limit=1'
    request({ 
        url,
        json: true    
    }, (error, {statusCode, body}) => {
        if(error)
            callback('Unable to connect to map api')
        else if (statusCode !== 200)
            callback('Error on map api: '+ statusCode + ' body: '+ JSON.stringify(body))
        else  
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            })
    })
}

module.exports = geocode