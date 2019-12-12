const request = require('request')

const forecast = (latitute, longitude, location,  callback) => {
    const url = 'https://api.darksky.net/forecast/b2f9cf0a63ba90ccb230dfccf48ffb38/'+ latitute + ',' + longitude + '?units=si'
    request( { url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.currently.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const temperature = response.body.currently.temperature
            const rain = response.body.currently.precipProbability
            // const daily = response.body.daily.summary
            const forcastResult = 'It is currently ' + temperature + ' degrees out. There is a ' + rain + '% chance of rain.'
            callback(undefined,
                {
                    forcastResult,
                    location
                }
            )
        }
    })
}

module.exports = forecast