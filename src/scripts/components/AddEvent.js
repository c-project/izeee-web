'use strict';

import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';
import EventAction from '../actions/EventAction.js';
import moment from 'moment';

var Link = Router.Link,
  Paper = mui.Paper,
  TextField = mui.TextField,
  DatePicker = mui.DatePicker,
  TimePicker = mui.TimePicker,
  Toggle = mui.Toggle,
  FlatButton = mui.FlatButton;

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

var errorText = "Обязательно для заполнения!";

var  AddEvent = React.createClass  ({
  createEvent(e) {
    console.log(this.refs.time.getTime());
//    if (!this._validateInput()) {
//      return;
//    }
    var event = {
      title: this.refs.title.getValue(),
      description: this.refs.description.getValue(),
      tags: this.refs.tags.getValue(),
      location: this.refs.location.getValue(),
      date: moment(this.refs.date.getDate()).utc().format('MM/DD/YYYY'),
      time: moment(this.refs.time.getTime()).utc().format('HH:mm'),
      public: !this.refs.eventType.isToggled(),
      //image
    };
    EventAction.createEvent(event);
  },
  _formatDate(date) {
    return moment(date).format("DD.MM.YYYY");
  },
//  _validateForm() {
//    var isValid = false;
//    isValid = this.validateTextField(this.refs.title);
//    return isValid;
//  },
//  _validateTextField(field) {
//    console.log(field);
//    if (field.target) {
//      field = field.target;
//    }
//     console.log();
//    var isValid = false;
//    if (field.getValue() != "") {
//      field.setErrorText("")
//      // errorText = "не пустая";
//      isValid = true;
//   } else {
//      field.setErrorText("пустая")
//    }
//    return isValid;
//  },
    render() {
      return (
        <div style={{width: 300}}>
        <Paper zDepth={0}>
        <h2>Create event</h2>
          <TextField ref="title" hintText="Enter title event" floatingLabelText="Enter title event" onChange={this._validateTextField}/>
          <TextField ref="description" hintText="Enter description event" floatingLabelText="Enter description event" multiLine={true}/>
          <TextField ref="tags" hintText="Enter tags event" floatingLabelText="Enter tags event"/>
          <TextField ref="location" hintText="Enter location event" floatingLabelText="Enter location event"/>
          <DatePicker ref="date" hintText="Enter date event" showYearSelector="true" formatDate={this._formatDate}/>
          <TimePicker ref="time" hintText="Enter time event" format="24hr"/>
          <Toggle ref="eventType" label="Private event"/>
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

//добавить плюшечки в TextField
//minDate now
//defaultTime now
