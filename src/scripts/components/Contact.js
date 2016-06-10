'use strict';

import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';

var Link = Router.Link,
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  RaisedButton = mui.RaisedButton,
  Avatar = mui.Avatar;

var Contact = React.createClass({
  onClick() {
    console.log(this.props.details.photo);
    this.props.details.photo = "images/photo3.jpg";
    console.log(this.props.details.photo);
  },
  render: function() {
      return (
          <Paper zDepth={1}>
              <div className="contact-details-container">
                    <Avatar className="contact-details-photo" src={this.props.details.photo} onClick={this.onClick}/>
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
