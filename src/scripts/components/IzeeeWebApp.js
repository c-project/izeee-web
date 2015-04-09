'use strict';

var React = require('react/addons');
var MyComponent = require('./MyComponent');
var ReactTransitionGroup = React.addons.TransitionGroup;
var mui = require('material-ui');

// CSS
// require('normalize.css');


var imageURL = require('../../images/yeoman.png');

var IzeeeWebApp = React.createClass({
  render: function() {
    return (
        <div className='main'>
          <ReactTransitionGroup transitionName="fade">
              <MyComponent/>
            <img src={imageURL} />
          </ReactTransitionGroup>
        </div>
    );
  }
});

module.exports = IzeeeWebApp;
