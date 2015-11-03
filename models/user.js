'use strict';

var database = require('../database');
var schema = database.Schema;

module.exports = database.model('User', schema({
  name: String,
  email: String,
  updated_at: { type: Date, default: Date.now }
}));
