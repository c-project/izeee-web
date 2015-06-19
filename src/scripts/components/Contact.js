'use strict';

import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';

var Link = Router.Link,
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  RaisedButton = mui.RaisedButton;

let Contact = React.createClass({
  render: function() {
      return (
          <Paper zDepth={1}>
              <div className="contact-details-container">
                    <img className="contact-details-photo" src="/images/photo.jpg"/>
                    <h3><Link to="contact-details" params={{phone:this.props.details.phone}} className="contact-details-link">
                        {this.props.details.name}
                    </Link></h3>
                    <p className="preferences">soccer football ice hockey</p>
                  </div>
          </Paper>
      );
  }
});
                  // <div>{this.props.details.name}</div>
                  // <div>{this.props.details.phone}</div>

module.exports = Contact;
