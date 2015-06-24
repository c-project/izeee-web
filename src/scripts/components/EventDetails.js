'use strict';

import React from 'react';
import Router from 'react-router';
import EventStore from '../stores/EventStore';
import mui from 'material-ui';

var Link = Router.Link,
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  RaisedButton = mui.RaisedButton;

  let EventDetails = React.createClass({
      mixins:[Router.Navigation, Router.State],
      getInitialState: function() {
           return {event: EventStore.getState(this.getParams().id)};
       },
       componentDidMount: function() {
           EventStore.addChangeListener(this._onChange);
       },
       componentWillUnmount: function() {
           EventStore.removeChangeListener(this._onChange);
       },
       _onChange: function() {
           this.setState({event: EventStore.getState(this.getParams().id)});
       },
      render: function() {
        if (!this.state.event) {
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
                      <div>{this.state.event.description}</div>
                  </p>
              </Paper>
          );
        }
    }
  });

  module.exports = EventDetails;
