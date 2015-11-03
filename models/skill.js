'use strict';

var database = require('../database');
var schema = database.Schema;

module.exports = database.model('Skill', schema({
  name: String,
  updated_at: { type: Date, default: Date.now }
}));
