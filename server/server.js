var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send('home page')
})


app.listen(1234, function () {
  console.log('App listening on port 1234!')
})


app.post('/data/keyData/value.docx', (req, res)=>{

})


module.exports = app