const path = require('path')
const express = require('express')
const chalk = require('chalk')


const app = express()
const publicPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Pang'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Pang'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help Page Ja',
        name: 'Pang'
    })
})

app.get('/weather', (req,res) => {
    res.send({
        forcast: 'It\'s snowing',
        location: 'Hokkaido'
    })
})

app.listen(3000, () => {
    console.log( chalk.green.inverse('Server is up on port 3000.'))
})