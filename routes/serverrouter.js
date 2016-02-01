var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var router = express.Router();
var testpage = React.createFactory(require('../pages/testpage'));
var error = React.createFactory(require('../pages/error'));

/* GET home page. */
router.get('/', function(req, res, next) {
  var reactHtml = ReactDOMServer.renderToString(testpage());
  console.log(reactHtml)
  res.render('index', {reactOutput: reactHtml, title: 'testpage'});
});

router.get('/error', function(req, res, next) {
  var reactHtml = ReactDOMServer.renderToString(error());
  res.render('index', {reactOutput: reactHtml, title: 'testpage'});
});


module.exports = router;
