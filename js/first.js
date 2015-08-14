(function() {
  var First, React;

  React = require('react');

  First = React.createClass({
    render: function() {
      return React.createElement("div", null, React.createElement("label", {
        "htmlFor": this.props.slug
      }, React.createElement("input", {
        "type": "checkbox",
        "id": this.props.slug,
        "onClick": this.props.changeEvent,
        "value": this.props.index,
        "checked": this.props.checked
      }), this.props.names));
    }
  });

  module.exports = First;

}).call(this);
