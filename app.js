var express = require('express');
var app = express();
var router = express.Router();

// Routes
var skills = require('./routes/skills');

app.use('/api', router);

app.get('/', function(req, res) {
  res.send('OK!!!');
});

app.use('/skills')

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
