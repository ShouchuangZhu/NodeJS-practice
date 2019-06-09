const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1d9c60ae33d322ef76a3047e0375567e/' + latitude + ',' + longitude;
    request({url: url, json: true}, (error, response) =>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degree out. This is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })

}



module.exports = forecast