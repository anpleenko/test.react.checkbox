(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  (function(React, module) {
    var Checkbox;
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
    return module.exports = Checkbox;
  })(React, module);

}).call(this);

},{}],2:[function(require,module,exports){
(function() {
  (function(React, _) {
    var SearchExample, checkbox, names;
    checkbox = require('./checkbox');
    SearchExample = React.createClass({
      getInitialState: function() {
        return {
          leftNames: _.sortBy(this.props.items, 'name'),
          rightNames: []
        };
      },
      generateSlug: function(text, side) {
        if (side === 'left') {
          return "item-name-left" + text;
        } else {
          return "item-name-right" + text;
        }
      },
      refreshState: function() {
        return this.setState(function() {
          return {
            leftNames: _.sortBy(this.state.leftNames, 'name'),
            rightNames: _.sortBy(this.state.rightNames, 'name')
          };
        });
      },
      changeEventLeft: function(e) {
        var addRight, nameIndex;
        nameIndex = parseInt(e.target.value, 10);
        addRight = this.state.leftNames[nameIndex];
        this.state.leftNames.splice(nameIndex, 1);
        this.state.rightNames.push(addRight);
        return this.refreshState();
      },
      changeEventRight: function(e) {
        var addLeft, nameIndex;
        nameIndex = parseInt(e.target.value, 10);
        addLeft = this.state.rightNames[nameIndex];
        this.state.rightNames.splice(nameIndex, 1);
        this.state.leftNames.push(addLeft);
        return this.refreshState();
      },
      render: function() {
        var leftComponents, rightComponents;
        leftComponents = this.state.leftNames.map((function(_this) {
          return function(l, e) {
            return React.createElement(checkbox, {
              "names": l.name,
              "slug": _this.generateSlug(e, 'left'),
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
              "slug": _this.generateSlug(e, 'right'),
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
    return React.render(React.createElement(SearchExample, {
      "items": names
    }), document.querySelector('.render'));
  })(React, _);

}).call(this);

},{"./checkbox":1}]},{},[2]);
