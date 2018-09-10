var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('solitaire', { layout: false, title: 'Solitaire' });
});

module.exports = router;
