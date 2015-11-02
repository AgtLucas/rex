var mongoose = require('mongoose');

var SkillSchema = new mongoose.Schema({
  name: String,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Skill', SkillSchema);
