var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/loginsubmit', function(req, res) {
  res.render('registration', { title: 'Here you can register Your Self' });
});

module.exports = router;
