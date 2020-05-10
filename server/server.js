var express = require('express')
var app = express()
var bodyParser = require("body-parser")
var persistence  = require('./persistence')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('home page')
})

app.post('/insert-data', (req, res)=>{

    persistence.insertData(req.query.keyData, req.query.data, (response)=>{
      console.log(response)
      res.send(response)
    })
})



app.listen(1234, function () {
  console.log('App listening on port 1234!')
})

module.exports = app