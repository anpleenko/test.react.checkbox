(function() {
  var React, Test;

  React = require('react');

  Test = React.createClass({
    render: function() {
      return React.createElement("div", null, "\u0445\u0435\u0440\u043d\u044f asldkjalskdjalskj");
    }
  });

  module.exports = Test;

}).call(this);
