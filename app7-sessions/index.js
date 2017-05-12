var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(session({
  secret: 'as;lkjenwrporiwej09238upoilkjsg;e09aeuwj'
}));

app.post('/api/data', function(req, res) {
  req.session.data = req.body;
  res.status(200).send('It worked');
});

app.get('/api/data', function(req, res) {
  res.status(200).send(req.session.data);
});

app.listen(port, function() {
  console.log('listening to port ', port);
});
