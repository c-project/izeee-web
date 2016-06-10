'use strict';

import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';

var Link = Router.Link;
var Paper = mui.Paper;

var IzeeeWebApp = React.createClass({
  render() {
    return (
      <Paper zDepth={0}>
        <div>
          <h2>Home</h2>
          <h2><Link to="sign-up">SignUp</Link></h2>
          <h2><Link to="add-contact">AddContact</Link></h2>
          <h2><Link to="add-event">AddEvent</Link></h2>
          </div>
      </Paper>
    );
  }
});

module.exports = IzeeeWebApp;
