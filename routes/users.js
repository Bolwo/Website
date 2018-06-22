var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:test', function(req, res, next) {
  res.send('respond with a resource' + req.params.test);
});

module.exports = router;
