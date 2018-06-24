var express = require('express');
var router = express.Router();

/* GET CV page. */
router.get('/', function(req, res, next) {
  res.render('CV', { title: 'CV' });
});

module.exports = router;
