var express = require('express')
var app = express()

app.get('/:api/:whoami', function (req, res) {
  var ipAddress = req.headers['x-forwarded-for']
  var language = req.headers["accept-language"].split(',')[0]
  var software = req.headers['user-agent'].match(/\((.+?)\)/)[1]
  var data = {
      ipAddress: ipAddress,
      language: language,
      software: software
  }
  res.send(data)
})

app.get('/', function(req,res) {
    res.send("Please go to /api/whoami to see your browser information")
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})