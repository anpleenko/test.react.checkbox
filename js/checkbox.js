(function() {
  var Checkbox, React;

  React = require('react');

  Checkbox = React.createClass({
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

  module.exports = Checkbox;

}).call(this);
