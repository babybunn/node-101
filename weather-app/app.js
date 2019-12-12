const request = require('request') 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const inputLocation = process.argv[2];

if( !inputLocation) {
    console.log('Please provide a location')
} else {
    geocode(inputLocation, (error, {latitude, longitude, location}) => {
        if(error) {
            return console.log(error)  // if there's an error the function will break after return ( the code line at 9 -14 won't work)
        }
        forecast(latitude, longitude, location, (error, {forcastResult, location}) => {
            if(error) {
                return console.log(error)  // if there's an error the function will break after return
            }
            console.log('Error', error)
            console.log('Data', forcastResult, location)
        })
        
    })
}