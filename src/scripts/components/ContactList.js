'use strict';

var React = require('react'),
  Contact = require('./Contact'),
  ContactStore = require('../stores/ContactStore'),
  mui = require('material-ui'),
  $ = require('jquery'),
  RaisedButton = mui.RaisedButton;

var ListUsers = React.createClass({
    getInitialState: function() {
         return {contacts: ContactStore.getState()};
     },
     componentDidMount: function() {
         ContactStore.addChangeListener(this._onChange);
     },
     componentWillUnmount: function() {
         ContactStore.removeChangeListener(this._onChange);
     },
     _onChange: function() {
         this.setState({contacts: ContactStore.getState()});
     },
    render: function() {
        return (
            <ul>
                {this.state.contacts.map(function(contact) {
                    return <li><Contact details={contact}/></li>;
                })}
            </ul>
        );
    }

});

module.exports = ListUsers;
