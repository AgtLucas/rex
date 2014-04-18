'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function (req, res) {
  res.send('Awesome!!!');
});

app.use('/api', router);

app.listen(port);