const request = require('request')

const url = 'https://api.darksky.net/forecast/1d9c60ae33d322ef76a3047e0375567e/37.8267,-122.4233'

request({ url: url }, (error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.currently)
})