var express = require('express')
var app = express()
var bodyParser = require("body-parser")
var persistence  = require('./persistence')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/insert-data', (req, res)=>{
    console.log(req.query)
    persistence.insertData(req.query.keyData, req.query.data, (response)=>{
      if(response === 'data saved successfully'){
        res.status(200).end()
      }else {
        res.status(401).end()
      }
    })
})

app.delete('/delete-data', (req, res) => {
  persistence.deleteData(req.query.keyData, (response)=> {
    res.end(response)
  })
})

app.get('/get-data', (req, res)=>{
  persistence.getData(req.query.keyData, (response)=>{
    console.log(response)
    res.send(response)
  } )
})

app.get('/get-all-data', (req, res)=>{
  persistence.getAllDatas( (response)=>{
    console.log(response)
    res.send(response)

  })
})


app.listen(1234, function () {
  console.log('App listening on port 1234!')
})

module.exports = app