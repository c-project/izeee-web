'use strict';

import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';

var Link = Router.Link,
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  RaisedButton = mui.RaisedButton;

  let Event = React.createClass({
    render: function() {
      return (
        <Paper zDepth={1}>
          <div className="event-details-container">
            <h3><Link to="event-details" params={{id:this.props.details.id}} className="event-details-link">
              {this.props.details.title}
            </Link></h3>
            <p className="event-details">{this.props.details.description}</p>
          </div>
        </Paper>
      )
    }
  })

  module.exports = Event;
