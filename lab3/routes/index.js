var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hn', function(req, res, next) {
  res.render('greenwich/hn' );
});


router.get('/hcm', function(req, res, next) {
  res.render('greenwich/hcm' );
});

router.get('/dn', function(req, res, next) {
  res.render('greenwich/dn' );
});

router.get('/ct', function(req, res, next) {
  res.render('greenwich/ct' );
});

module.exports = router;
