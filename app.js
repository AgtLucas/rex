'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

// bodyParser - allow get data from a POST
app.use(bodyParser());

// Port
var port = process.env.PORT || 8080;

// Router instance
var router = express.Router();

// GET
router.get('/', function (req, res) {
  res.send('Awesome!!!');
});

// Routes
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
