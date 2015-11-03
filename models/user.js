'use strict';

var database = require('../database');
var schema = database.Schema;

module.exports = database.model('User', schema({
  name: String,
  email: String,
  skills: [{
    name: String,
    value: { type: Number, min: 0, max: 10 }
  }],
  updated_at: { type: Date, default: Date.now }
}));
