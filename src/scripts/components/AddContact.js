'use strict';

import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';

var Link = Router.Link,
Paper = mui.Paper;

var AddContact = React.createClass  ({
  render() {
  return (
    <div>
    <Paper zDepth={0}>
    <h2>AddContact</h2>
    </Paper>
    </div>
  );
}
});

module.exports = AddContact;
