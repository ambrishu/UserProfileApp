var express = require('express');
var router = express.Router();

/* Get the registration page up*/

router.post('/registration', function(req, res) {
  res.render('registration', { title: 'Here you can register Your Self' });
});

module.exports = registration;