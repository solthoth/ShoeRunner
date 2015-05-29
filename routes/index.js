var express = require('express');
var router = express.Router();

var appTitle = 'ShoeRunner';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: appTitle });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: appTitle });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: appTitle });
});

module.exports = router;
