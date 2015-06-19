'use strict';

var React = require('react'),
  Contact = require('./Contact'),
  ContactStore = require('../stores/ContactStore'),
  mui = require('material-ui'),
  $ = require('jquery'),
  FloatingActionButton = mui.FloatingActionButton,
  Paper = mui.Paper;

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
        let style = {
            margin: '1em'
        };
        return (
            <Paper style={style} zDepth={0}>
                <FloatingActionButton className="button" iconClassName="muidocs-icon-action-add">

                </FloatingActionButton>
                <Paper zDepth={0}>
                    <h2>Contact list</h2>
                </Paper>
                {this.state.contacts.map(function(contact) {
                    return <Contact details={contact} />;
                })}
            </Paper>
        );
    }

});

module.exports = ContactList;
