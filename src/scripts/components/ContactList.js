'use strict';

var React = require('react'),
  Contact = require('./Contact'),
  ContactStore = require('../stores/ContactStore'),
  mui = require('material-ui'),
  $ = require('jquery'),
  RaisedButton = mui.RaisedButton;

var ContactList = React.createClass({
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
            <div>
                {this.state.contacts.map(function(contact) {
                    return <Contact details={contact}/>;
                })}
            </div>
        );
    }

});

module.exports = ContactList;
