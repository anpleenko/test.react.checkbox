(function() {
  var React, SearchExample, checkbox, names, _;

  React = require('react');

  checkbox = require('./first');

  _ = require('underscore');

  SearchExample = React.createClass({
    getInitialState: function() {
      return {
        leftNames: _.sortBy(this.props.items, 'name'),
        rightNames: []
      };
    },
    generateSlugLeft: function(text) {
      return "item-name-left" + text;
    },
    generateSlugRight: function(text) {
      return "item-name-right" + text;
    },
    changeEventLeft: function(e) {
      var addRight, nameIndex;
      nameIndex = parseInt(e.target.value, 10);
      addRight = this.state.leftNames[nameIndex];
      this.state.leftNames.splice(nameIndex, 1);
      this.state.rightNames.push(addRight);
      return this.setState(function() {
        return {
          leftNames: _.sortBy(this.state.leftNames, 'name'),
          rightNames: _.sortBy(this.state.rightNames, 'name')
        };
      });
    },
    changeEventRight: function(e) {
      var addLeft, nameIndex;
      nameIndex = parseInt(e.target.value, 10);
      addLeft = this.state.rightNames[nameIndex];
      this.state.rightNames.splice(nameIndex, 1);
      this.state.leftNames.push(addLeft);
      return this.setState(function() {
        return {
          leftNames: _.sortBy(this.state.leftNames, 'name'),
          rightNames: _.sortBy(this.state.rightNames, 'name')
        };
      });
    },
    render: function() {
      var leftComponents, rightComponents;
      leftComponents = this.state.leftNames.map((function(_this) {
        return function(l, e) {
          return React.createElement(checkbox, {
            "names": l.name,
            "slug": _this.generateSlugLeft(e),
            "changeEvent": _this.changeEventLeft,
            "index": e,
            "checked": ""
          });
        };
      })(this));
      rightComponents = this.state.rightNames.map((function(_this) {
        return function(l, e) {
          return React.createElement(checkbox, {
            "names": l.name,
            "slug": _this.generateSlugRight(e),
            "changeEvent": _this.changeEventRight,
            "index": e,
            "checked": "checked"
          });
        };
      })(this));
      return React.createElement("div", {
        "className": "wrap clearfix"
      }, React.createElement("div", {
        "className": "left"
      }, leftComponents), React.createElement("div", {
        "className": "right"
      }, rightComponents));
    }
  });

  names = [
    {
      name: 'Иванов Иван'
    }, {
      name: 'Петров Петр'
    }, {
      name: 'Зеленый Вениамин'
    }, {
      name: 'Гербулов Иван'
    }, {
      name: 'Осипова Анна'
    }, {
      name: 'Мелкумянц Алексей'
    }, {
      name: 'Швыдько Елена'
    }, {
      name: 'Макаров Алексей'
    }, {
      name: 'Декиров Марат'
    }, {
      name: 'Скольник Андрей'
    }
  ];

  React.render(React.createElement(SearchExample, {
    "items": names
  }), document.querySelector('.render'));

}).call(this);
