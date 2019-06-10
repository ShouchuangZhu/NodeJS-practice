const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1d9c60ae33d322ef76a3047e0375567e/' + latitude + ',' + longitude;
    request({url: url, json: true}, (error, {body}) =>{ //response replaced by body
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degree out. This is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })

}



module.exports = forecast