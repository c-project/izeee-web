'use strict';

import React from 'react';
import Router from 'react-router';
import EventStore from '../stores/EventStore';
import mui from 'material-ui';
import moment from "moment";
import DateTimeConstants from '../constants/DateTimeConstants';


var Link = Router.Link,
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  FontIcon = mui.FontIcon,
  RaisedButton = mui.RaisedButton,
  Card = mui.Card,
  CardHeader = mui.CardHeader,
  Avatar = mui.Avatar,
  CardMedia = mui.CardMedia,
  CardTitle = mui.CardTitle,
  CardActions = mui.CardActions,
  CardText = mui.CardText;

  let EventDetails = React.createClass({
      mixins:[Router.Navigation, Router.State],
      getInitialState: function() {
           return {event: EventStore.getState(this.getParams().id)};
       },
       componentDidMount: function() {
           EventStore.addChangeListener(this._onChange);
       },
       componentWillUnmount: function() {
           EventStore.removeChangeListener(this._onChange);
       },
       _onChange: function() {
           this.setState({event: EventStore.getState(this.getParams().id)});
       },
      render: function() {
        if (!this.state.event) {
          return (
            <Paper zDepth={2}>
                <p>The event does not exist</p>
            </Paper>
          );
        } else {
            var datetime = moment.utc(this.state.event.datetime).local().format(DateTimeConstants.DATE_TIME
            );
          console.log(datetime);
          return (
              <Paper zDepth={2}>
                      <Card>
                        <CardHeader title={this.state.event.title} subtitle={this.state.event.tags} avatar={<Avatar>{this.state.event.image}</Avatar>}/>
                        <CardMedia>
                          <img src="http://lorempixel.com/500/500/nature/"/>
                        </CardMedia>
                         <CardTitle title={this.state.event.title} subtitle={this.state.event.description}/>
                         <CardText>{this.state.event.location} @ {datetime}</CardText>
                         <CardText>{this.state.event.public ? "Pulbic" : "Private"}</CardText>
                         <CardActions>
                          <FlatButton label="Go"/>
                          <FlatButton label="Maybe"/>
                          <FlatButton label="Not go"/>
                         </CardActions>
                      </Card>
              </Paper>
          );
        }
    }
  });

  module.exports = EventDetails;
