'use strict';

var React = require('react'),
  Event = require('./Event'),
  EventStore = require('../stores/EventStore'),
  mui = require('material-ui'),
  $ = require('jquery'),
  FloatingActionButton = mui.FloatingActionButton,
  Paper = mui.Paper;

var EventList = React.createClass({
    getInitialState: function() {
         return {events: EventStore.getState()};
     },
     componentDidMount: function() {
         EventStore.addChangeListener(this._onChange);
     },
     componentWillUnmount: function() {
         EventStore.removeChangeListener(this._onChange);
     },
     _onChange: function() {
         this.setState({events: EventStore.getState()});
     },
    render: function() {
        let style = {
            margin: '1em'
        };
        let sb = {
          position: 'absolute',
          right: '25px',
          bottom: '-100px',
        };
        return (
          <div>
<<<<<<< HEAD
=======
          <FloatingActionButton/>
>>>>>>> 96c0a74def821a521eb4ae702612876c64574223
            <Paper style={style} zDepth={0}>
                <Paper zDepth={0}>
                    <h2>Event list</h2>
                </Paper>
                {this.state.events.map(function(event) {
                    return <Event details={event} />;
                })}
            </Paper>
            <FloatingActionButton style={sb} iconClassName="muidocs-icon-action-add"/>
            </div>
        );
    }
});

module.exports = EventList;
