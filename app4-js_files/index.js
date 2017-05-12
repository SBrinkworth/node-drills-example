var express = require('express')
var bodyparser = require('body-parser')
var data = require('./data')

var app = express()

app.use(bodyparser.json())

app.get('/api/data', function(req, res, next){
  res.status(200).json({
    statusCode: "ok",
    data: data
  })
})

app.post('/api/data', function(req, res, next){
  let people = req.body
  data.push(people)
  res.status(200).send("ok");
})

app.listen(3000, console.log("Listening on 3000..."))
