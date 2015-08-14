(function() {
  var React, Second;

  React = require('react');

  Second = React.createClass({
    render: function() {
      return React.createElement("div", null, React.createElement("input", {
        "type": "checkbox",
        "id": this.props.id
      }), React.createElement("label", {
        "htmlFor": this.props.id
      }, this.props.names));
    }
  });

  module.exports = Second;

}).call(this);
