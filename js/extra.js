(function() {
  var List, React;

  React = require('react');

  List = React.createClass({
    render: function() {
      return React.createElement("div", null, React.createElement("input", {
        "type": "checkbox",
        "id": this.props.slug
      }), React.createElement("label", {
        "htmlFor": this.props.slug
      }, this.props.name));
    }
  });

  module.exports = List;

}).call(this);
