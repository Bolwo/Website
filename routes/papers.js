var express = require('express');
var router = express.Router();

/* GET papers page. */
router.get('/', function(req, res, next) {
  res.render('papers', { title: 'Papers' });
});

module.exports = router;
