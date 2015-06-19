'use strict';

import React from 'react';
import Router from 'react-router';
//import ContactStore from '../stores/ContactStore'; //?
import mui from 'material-ui';

var Link = Router.Link,
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  RaisedButton = mui.RaisedButton;

  let EventDetails = React.createClass({
      mixins:[Router.Navigation, Router.State],
      getInitialState: function() {
           //return {contact: ContactStore.getState(this.getParams().phone)};
       },
       componentDidMount: function() {
           //ContactStore.addChangeListener(this._onChange);
       },
       componentWillUnmount: function() {
           //ContactStore.removeChangeListener(this._onChange);
       },
       _onChange: function() {
           //this.setState({contact: ContactStore.getState(this.getParams().phone)});
       },
      render: function() {
        if (!this.state.title) {
          return (
            <Paper zDepth={2}>
                <p>Event does not exist.</p>
            </Paper>
          );
        } else {
          return (
              <Paper zDepth={2}>
                  <p>
                      <div>{this.state.event.title}</div>
                      <div>{this.state.event.details}</div>
                  </p>
              </Paper>
          );
        }
    }
  });

  module.exports = EventDetails;
