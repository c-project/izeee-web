'use strict';

import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';

var Link = Router.Link,
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  Avatar = mui.Avatar,
  RaisedButton = mui.RaisedButton;

let Contact = React.createClass({
  render: function() {
      return (
          <Paper zDepth={1}>
              <div>
                    <Avatar src={this.props.details.photo}/>
                    <h3><Link to="contact-details" params={{phone:this.props.details.phone}} className="contact-details-link">
                        {this.props.details.name}
                    </Link></h3>
                    <p className="preferences">{this.props.details.preference}</p>
                  </div>
          </Paper>
      );
  }
});

module.exports = Contact;
