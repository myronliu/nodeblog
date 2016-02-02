var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var router = express.Router();
var testpage = React.createFactory(require('../pages/testpage'));
var error = React.createFactory(require('../pages/error'));

var apiAddress = "http://a.com/";
if(process.env.NODE_ENV != undefined){
  switch(process.env.NODE_ENV ){
    case "uat":
      apiAddress =  "http://uat.com/";
      break;
    case "production":
      apiAddress = "http://prd.com/";
      break;
    case "development":
      //apiAddress = "http://api.dev.lezhuan.io/zhuanle";
      //apiAddress =  "http://zzhuanle2.kjtpay.com/zhuanle";

      apiAddress = "http://dev.com/";
      break;
  }
}

// TODO: 这里设置的是服务端发起请求的url设置
global.ajaxSet = {url:apiAddress,header:{"Content-Type":"application/json","X-KJT-Agent": "h511111111111111111111111;h511111111111111111111111;h5;h5;;h5;h5;1.0.0;WIFI;h511111111111111111111111","X-KJT-AUTH": "","X-SSO-Auth":"","X-API-VER": "2.0"}}

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
