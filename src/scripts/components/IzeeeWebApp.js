'use strict';

import React from 'react/addons';
import mui from 'material-ui';

var CircularProgress = mui.CircularProgress;

var IzeeeWebApp = React.createClass({
  render() {
    return (
      <CircularProgress mode="indeterminate" size={2} />
    );
  }
});

module.exports = IzeeeWebApp;
