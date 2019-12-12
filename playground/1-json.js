const fs = require('fs')
const dataFile = fs.readFileSync('1-json.json')
const dataJSON = dataFile.toString()
const data = JSON.parse(dataJSON)

data.name = 'Pang'
data.age = 26

const dataInput = JSON.stringify(data)

fs.writeFileSync('1-json.json', dataInput)



