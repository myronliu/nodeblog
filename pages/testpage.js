var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      pageTitle: "添加广告",
      site:"",
      location:"",
      startTime: "",
      endDate: ""
    };
  },
  componentDidMount: function(){
    
  },

  componentWillUnmount: function() {
  },
  handleClick: function(){
    console.log("this is a test");
  },
  render:function(){
    console.log("slkdjfsdlkjfsldkjfj-----")
    return (
      <div  onClick={this.handleClick}>
        <h1>hhhhhafasdfsadlfs</h1>
      </div>
    )
  }
})