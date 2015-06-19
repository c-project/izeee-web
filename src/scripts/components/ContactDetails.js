'use strict';

import React from 'react';
import Router from 'react-router';
import ContactStore from '../stores/ContactStore';
import mui from 'material-ui';

var Link = Router.Link,
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  RaisedButton = mui.RaisedButton;

let ContactDetails = React.createClass({
    mixins:[Router.Navigation, Router.State],
    getInitialState: function() {
         return {contact: ContactStore.getState(this.getParams().phone)};
     },
     componentDidMount: function() {
         ContactStore.addChangeListener(this._onChange);
     },
     componentWillUnmount: function() {
         ContactStore.removeChangeListener(this._onChange);
     },
     _onChange: function() {
         this.setState({contact: ContactStore.getState(this.getParams().phone)});
     },
    render: function() {
      if (!this.state.contact) {
        return (
          <Paper zDepth={2}>
              <p>User does not exist.</p>
          </Paper>
        );
      } else {
        return (
            <Paper zDepth={2}>
                <p>
                    <div>{this.state.contact.name}</div>
                    <div>{this.state.contact.phone}</div>
                </p>
            </Paper>
        );
      }
  }
});

module.exports = ContactDetails;
