'use strict';

import React from 'react/addons';
import mui from 'material-ui';

var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
// require('normalize.css');


var imageURL = require('../../images/yeoman.png');

var IzeeeWebApp = React.createClass({
  render() {
    return (
        <div className='main'>
          <ReactTransitionGroup transitionName="fade">
            <img src={imageURL} />
          </ReactTransitionGroup>
        </div>
    );
  }
});

module.exports = IzeeeWebApp;
