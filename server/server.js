var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(1234, function () {
  console.log('App listening on port 1234!')
})

module.exports = app