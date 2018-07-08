var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('education', { layout: false, title: 'Curriculum Vitae - Education' });
});

module.exports = router;
