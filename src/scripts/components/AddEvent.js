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
  FlatButton = mui.FlatButton,

  Table = mui.Table;

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

// NEW
let headerCols = {
  id: {
    content: 'ID',
    tooltip: 'The ID'
  },
  name: {
    content: 'Name',
    tooltip: 'The Name'
  },
  phone: {
    content: 'Phone',
    tooltip: 'The Phone'
  }
};
let footerCols = {
  id: {content: 'ID'},
  name: {content: 'Name'},
  phone: {content: 'Phone'}
  };
let colOrder = ['id', 'name', 'phone'];
let rowData = [
  {selected: true, id: {content: '1'}, name: {content: 'name1'}, phone: {content: '+012345'}},
  {id: {content: '2'}, name: {content: 'name2'}, phone: {content: '+012345'}},
  {id: {content: '3'}, name: {content: 'name3'}, phone: {content: '+012345'}},
  {id: {content: '4'}, name: {content: 'name4'}, phone: {content: '+012345'}},
  {id: {content: '5'}, name: {content: 'name5'}, phone: {content: '+012345'}},
  {id: {content: '6'}, name: {content: 'name6'}, phone: {content: '+012345'}},
  {id: {content: '7'}, name: {content: 'name7'}, phone: {content: '+012345'}},
  {id: {content: '8'}, name: {content: 'name8'}, phone: {content: '+012345'}},
  {id: {content: '9'}, name: {content: 'name9'}, phone: {content: '+012345'}},
  {id: {content: '10'}, name: {content: 'name10'}, phone: {content: '+012345'}},
  {id: {content: '11'}, name: {content: 'name11'}, phone: {content: '+012345'}},
  {id: {content: '12'}, name: {content: 'name12'}, phone: {content: '+012345'}},
  {id: {content: '13'}, name: {content: 'name13'}, phone: {content: '+012345'}},
  {id: {content: '14'}, name: {content: 'name14'}, phone: {content: '+012345'}},
  {id: {content: '15'}, name: {content: 'name15'}, phone: {content: '+012345'}}
];
// NEW

var  AddEvent = React.createClass  ({
  createEvent(e) {
    var eventDate = moment(this.refs.date.getDate()).format(DateTimeConstants.DATE_ONLY);
    var eventTime = moment(this.refs.time.getTime()).format(DateTimeConstants.TIME_ONLY);
    var datetime = moment(eventDate + " " + eventTime).utc().format(DateTimeConstants.DATE_TIME);
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
  },
    render() {
      return (
        <div>
        <Paper zDepth={0} style={{width: 300}}>
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
        <Paper zDepth={0}>
        <Table headerColumns={headerCols} footerColumns={footerCols} columnOrder={colOrder} rowData={rowData}
        height="300px" fixedHeader="true" fixedFooter="true" stripedRows="false" showRowHover="false"
        selectable="true" multiSelectable="false" canSelectAll="false" deselectOnClickaway="true" ref="table"/>
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
