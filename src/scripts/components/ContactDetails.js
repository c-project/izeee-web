'use strict';

var React = require('react'),
  Router = require('react-router'),
  ContactStore = require('../stores/ContactStore'),
  Link = Router.Link,
  mui = require('material-ui'),
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  $ = require('jquery'),
  RaisedButton = mui.RaisedButton;

var imageURL = require('../../images/yeoman.png');

var ContactDetails = React.createClass({
    mixins:[Router.Navigation, Router.State],
    getInitialState: function() {
         return {contacts: ContactStore.getState(this.getParams().phone)};
     },
     componentDidMount: function() {
         ContactStore.addChangeListener(this._onChange);
     },
     componentWillUnmount: function() {
         ContactStore.removeChangeListener(this._onChange);
     },
     _onChange: function() {
         this.setState({contacts: ContactStore.getState(this.getParams().phone)});
     },
    render: function() {
      console.log(this.getParams().phone);
      return (
          <Paper zDepth={2}>
              <p>
                  <div>{this.getState().contact.name}</div>
                  <div>{this.getState().contact.phone}</div>
              </p>
          </Paper>
      );
  }
});

module.exports = ContactDetails;
