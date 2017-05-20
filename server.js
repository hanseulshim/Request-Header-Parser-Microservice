var express = require('express')
var app = express()
var path = require('path');
var port = process.env.PORT || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var routes = require('./routes/index');
app.use('/', routes);


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

  app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
  });