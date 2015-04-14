'use strict';

var React = require('react'),
  Router = require('react-router'),
  Link = Router.Link,
  mui = require('material-ui'),
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  $ = require('jquery'),
  RaisedButton = mui.RaisedButton;

var imageURL = require('../../images/yeoman.png');

var Contact = React.createClass({
  render: function() {
      return (
          <Paper zDepth={2}>
              <p>
                  <Link to="contact-details" params={{phone:this.props.details.phone}}>
                      <i className="fa fa-camera-retro fa-5x"></i>
                  </Link>
                  <FlatButton secondary={true}>

                      <span className="mui-flat-button-label">Github</span>
                  </FlatButton>
                  <div>{this.props.details.name}</div>
                  <div>{this.props.details.phone}</div>
              </p>
          </Paper>
      );
  }
});

module.exports = Contact;
