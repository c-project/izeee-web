'use strict';

var React = require('react'),
  mui = require('material-ui'),
  $ = require('jquery'),
  RaisedButton = mui.RaisedButton;

var Contact = React.createClass({
  render: function() {
      return (
          <div>
              <div>{this.props.details.name}</div>
              <div>{this.props.details.phone}</div>
          </div>
      );
  }
});

module.exports = Contact;
