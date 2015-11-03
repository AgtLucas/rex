var express = require('express');
var router = express.Router();
var Skill = require('../models/Skill');

// GET
router.get('/', function(req, res, next) {
  Skill.find(function(err, skills) {
    if (err) return next(err);
    res.json(skills);
  })
});

// GET by id
router.get('/:id', function(req, res, next) {
  Skill.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  })
});

// POST
router.post('/', function(req, res, next) {
  Skill.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// PUT
router.put('/:id', function(req, res, next) {
  Skill.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// DELETE
router.delete('/:id', function(req, res, next) {
  Skill.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
