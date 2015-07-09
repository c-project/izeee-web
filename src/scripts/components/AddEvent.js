'use strict';

import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';
import EventAction from '../actions/EventAction.js';

var Link = Router.Link,
  Paper = mui.Paper,
  TextField = mui.TextField,
  DatePicker = mui.DatePicker,
  TimePicker = mui.TimePicker,
  Toggle = mui.Toggle,
  FlatButton = mui.FlatButton;

var toggle = false,
typeEvent = "Open"
//?

var style = {
  fileInput: {
    position:"absolute",
    top:0,
    left:0,
    right:0,
    bottom:0,
    opacity:0
  }
}

var  AddEvent = React.createClass  ({
<<<<<<< HEAD
    render: function () {
=======
  createEvent(e) {
    var event = {
      title: this.refs.title.getValue(),
      description: this.refs.description.getValue(),
      tags: this.refs.tags.getValue(),
      dislocation: this.refs.dislocation.getValue(),
      type: typeEvent,
    };
    EventAction.createEvent(event);
  },
    _toggle: function() {
      toggle = !toggle;
      if (toggle) {
        typeEvent = "Close"
      } else {
        typeEvent = "Open"
      }
    },
    render() {
>>>>>>> 96c0a74def821a521eb4ae702612876c64574223
      return (
        <div style={{width: 300}}>
        <Paper zDepth={0}>
        <h2>Create event</h2>
          <TextField ref="title" hintText="Enter title event" floatingLabelText="Enter title event"/>
<<<<<<< HEAD

          <TextField multiLine={true} hintText="Enter description event" floatingLabelText="Enter description event"/>
          <Toggle label="Type event: Open\Private"/>
          <DatePicker hintText="Enter date event"/>
=======
          <TextField ref="description" multiLine={true} hintText="Enter description event" floatingLabelText="Enter description event"/>
          <TextField ref="tags" hintText="Enter tags event" floatingLabelText="Enter tags event"/>
          <TextField ref="dislocation" hintText="Enter dislocation event" floatingLabelText="Enter dislocation event"/>
          <DatePicker hintText="Enter date event" showYearSelector="true"/>
>>>>>>> 96c0a74def821a521eb4ae702612876c64574223
          <TimePicker format="24hr" hintText="Enter time event"/>
          <Toggle label="Type event: Open\Private" onClick={this._toggle}/>
          <FlatButton primary={true} label="Choose image">
            <input style={style.fileInput} type="file"/>
          </FlatButton>
          <FlatButton label="Create event" onClick={this.createEvent}/>
        </Paper>
        </div>
      );
    }
  });

  module.exports = AddEvent;

// DatePicker format dd/mm/yyyy
// DatePicker defaultDate now
