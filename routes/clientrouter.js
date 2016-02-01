var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('../helper/router');
var Testpage = require('../pages/testpage');//一定要大写啊亲～～～～～～～
var reactBodyContainer = document.getElementById('react-body-container');
function _reactRender(cmpt, opts){
  opts = opts || {};
  ReactDOM.render(cmpt, reactBodyContainer);
}

// React.initializeTouchEvents(true);
var Router = Router.__create__({
  '/': function(){
    //console.log(testpage)
    // _reactRender(<testpage />);
    console.log(reactBodyContainer)
    ReactDOM.render(<Testpage />, reactBodyContainer);
  }
}).configure({html5history:true}).init();

window.to = function(url){return Router.setRoute(url);}

//待完成

module.exports = Router;