'use strict';

import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';
import Contact from './Contact';
import ContactStore from '../stores/ContactStore';
import $ from 'jquery';

var Link = Router.Link,
    Paper = mui.Paper,
    FloatingActionButton = mui.FloatingActionButton;

var style = {
  button: {
    position: 'fixed', right: '10px', bottom: '10px'
  }
}

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
     _onClick() {
       console.log(1);
     },
     render: function() {
        return (
            <Paper style={{margin: '1em'}} zDepth={0}>
              <Paper zDepth={0}>
                <h2>Contact list</h2>
              </Paper>
              {this.state.contacts.map(function(contact) {
                return <Contact details={contact} />;
              })}
              <FloatingActionButton style={style.button} onClick={this._onClick}/>
            </Paper>
        );
     }
});

module.exports = ContactList;
