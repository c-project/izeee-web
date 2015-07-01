'use strict';

import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';

var Link = Router.Link,
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  RaisedButton = mui.RaisedButton,
  Avatar = mui.Avatar;

  let Event = React.createClass({
    render: function() {
      return (
        <Paper zDepth={1}>
          <div className="event-details-container">
            <Avatar>{this.props.details.image}</Avatar>
            <h3><Link to="event-details" params={{id:this.props.details.id}} className="event-details-link">
              {this.props.details.title}
            </Link></h3>
            <p className="event-details-tags">{this.props.details.tags}</p>
          </div>
        </Paper>
      )
    }
  })

  module.exports = Event;
