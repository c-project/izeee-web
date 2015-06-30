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

var style = {
  fileInput: {
    opacity:0,
    position:"absolute",
    top:0,
    left:0,
    right:0,
    bottom:0
  }
}

var  AddEvent = React.createClass  ({
  REQUIRE_FIELD_TEXT: "Field can't be empty",
  getInitialState() {
    return {
        title:this.props.event.title,
        titleErrorText:this.REQUIRE_FIELD_TEXT
      }
  },
  _onTitleChange(e) {
    let newValue = this.refs.title.getValue();
    this.setState({title:newValue});
    if (!newValue) {
      this.setState({titleErrorText:this.REQUIRE_FIELD_TEXT});
    } else {
      this.setState({titleErrorText:null});
    }
  },
    render: function () {
      return (
        <div style={{width: 300}}>
        <Paper zDepth={0}>
        <h2>Create event</h2>
          <TextField ref="title" hintText="Enter title event" floatingLabelText="Enter title event" errorText={this.state.titleErrorText} onChange={this._onTitleChange}/>

          <TextField multiLine={true} hintText="Enter description event" floatingLabelText="Enter description event"/>
          <Toggle label="Type event: Open\Private"/>
          <DatePicker hintText="Enter date event"/>
          <TimePicker format="24hr" hintText="Enter time event"/>

          <FlatButton primary={true} label="Choose image">
            <input style={style.fileInput} type="file"/>
          </FlatButton>
          <FlatButton label="Create event"/>
        </Paper>
        </div>
      );
    }
  });

  module.exports = AddEvent;

//MOD TextField что бы были обязательны для заполнения
//ADD in DatePicker format dd/mm/yyyy
//ADD in DatePicker defaultDate now
//ADD http://material-ui.com/#/components/table
