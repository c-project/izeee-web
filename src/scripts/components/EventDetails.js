'use strict';

import React from 'react';
import Router from 'react-router';
import EventStore from '../stores/EventStore';
import mui from 'material-ui';

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
                <p>Событие не существует</p>
            </Paper>
          );
        } else {
          return (
              <Paper zDepth={2}>
                      <Card>
                        <CardHeader title={this.state.event.title} subtitle={this.state.event.tags} avatar={<Avatar>{this.state.event.image}</Avatar>}/>
                        <CardMedia>
                          <img src="http://lorempixel.com/500/500/nature/"/>
                        </CardMedia>
                         <CardTitle title={this.state.event.title} subtitle={this.state.event.description}/>
                         <CardActions>
                          <FlatButton label="Пойду"/>
                          <FlatButton label="Возможно пойду"/>
                          <FlatButton label="Не пойду"/>
                         </CardActions>
                      </Card>
              </Paper>
          );
        }
    }
  });

  module.exports = EventDetails;
