'use strict';

import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';

var Link = Router.Link,
  Paper = mui.Paper,
  TextField = mui.TextField,
  Toggle = mui.Toggle,
  DatePicker = mui.DatePicker,
  FlatButton = mui.FlatButton,
  TimePicker = mui.TimePicker;

var  AddEvent = React.createClass  ({
    render: function () {
      return (
        <div style={{width: 200}}>
        <Paper zDepth={0}>
        <h2>Create event</h2>
          <TextField hintText="Enter title event" floatingLabelText="Enter title event"/>

          <TextField multiLine={true} hintText="Enter description event" floatingLabelText="Enter description event"/>
          <Toggle label="Type event: Open\Private"/>
          <DatePicker hintText="Enter date event"/>

          <FlatButton primary={true} label="Choose image">
            <input type="file"/>
          </FlatButton>
          <FlatButton label="Create event"/>
        </Paper>
        </div>
      );
    }
  });

  module.exports = AddEvent;

//ADD TimePicker
//MOD TextField что бы были обязательны для заполнения
//ADD in DatePicker format dd/mm/yyyy
//ADD in DatePicker defaultDate now
//ADD http://material-ui.com/#/components/table
