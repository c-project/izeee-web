'use strict';

import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';
import EventAction from '../actions/EventAction.js';
import moment from 'moment';
import DateTimeConstants from '../constants/DateTimeConstants';

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

var  AddEvent = React.createClass  ({
  createEvent(e) {
    var eventDate = moment(this.refs.date.getDate()).format(DateTimeConstants.DATE_ONLY); //'MM/DD/YYYY'
    var eventTime = moment(this.refs.time.getTime()).format(DateTimeConstants.TIME_ONLY); //'HH:mm'
    var datetime = moment(eventDate + " " + eventTime).utc().format(DateTimeConstants.DATE_TIME); //'MM/DD/YYYY HH:mm'
    var event = {
      title: this.refs.title.getValue(),
      description: this.refs.description.getValue(),
      tags: this.refs.tags.getValue(),
      location: this.refs.location.getValue(),
      datetime : datetime,
      public: !this.refs.eventType.isToggled(),
      //image
    };
    EventAction.createEvent(event);
    console.log(datetime);
  },
    render() {
      return (
        <div style={{width: 300}}>
        <Paper zDepth={0}>
        <h2>Create event</h2>
          <TextField ref="title" hintText="Enter title event" floatingLabelText="Enter title event"/>
          <TextField ref="description" hintText="Enter description event" floatingLabelText="Enter description event" multiLine={true}/>
          <TextField ref="tags" hintText="Enter tags event" floatingLabelText="Enter tags event"/>
          <TextField ref="location" hintText="Enter location event" floatingLabelText="Enter location event"/>
          <DatePicker ref="date" hintText="Enter date event" floatingLabelText="Enter date event" showYearSelector="true"/>
          <TimePicker ref="time" hintText="Enter time event" floatingLabelText="Enter time event" format="24hr"/>
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

//defaultDate now
//formatDate DD.MM.YYYY
//minDate now
//defaultTime now
//TextField errorText
  //TextField onChange - errorText off
//добавить друге плюшечки в TextField...
