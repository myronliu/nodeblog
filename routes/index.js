var express = require('express');
var React = require('react');
var router = express.Router();
var testpage = React.createFactory(require('../pages/testpage'));

/* GET home page. */
router.get('/', function(req, res, next) {
  var reactHtml = React.renderToString(testpage());
  res.render('index', {reactOutput: reactHtml, title: 'testpage'});
});

module.exports = router;
