'use strict';

import React from 'react/addons';
import Router from 'react-router';
import mui from 'material-ui';
import reactMixin from 'react-mixin';
import injectTapEventPlugin from "react-tap-event-plugin";
import IzeeeWebApp from './IzeeeWebApp';
import AppLeftNav from './AppLeftNav';
import ContactList from './ContactList';
import EventList from './EventList';
import ContactDetails from './ContactDetails';
import EventDetails from './EventDetails';
import AddEvent from './AddEvent';

var Route = Router.Route,
    Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    AppCanvas = mui.AppCanvas,
    AppBar = mui.AppBar;


injectTapEventPlugin();
require('style');

const content = document.querySelector('#content');

let App = React.createClass({
  mixins:[Router.State],
    render() {
        return (
            <AppCanvas>
                <AppBar title="IZEEE" onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap} />
                <AppLeftNav ref="leftNav" />
                <RouteHandler/>
            </AppCanvas>
        );
    },
    _onMenuIconButtonTouchTap() {
        this.refs.leftNav.toggle();
    }
});

let AppRoutes = (
  <Route name="app" path="/" handler={App}>
  <Route name="contacts" path="/contacts" handler={ContactList}/>
  <Route name="contact-details" path="/contact/:phone" handler={ContactDetails}/>
  <Route name="events" path="/events" handler={EventList}/>
  <Route name="event-details" path="/event/:id" handler={EventDetails}/>
  <Route name="add-event" path="/new" handler={AddEvent}/>
  <DefaultRoute handler={IzeeeWebApp}/>
  </Route>
);

Router.create({
    routes: AppRoutes,
    scrollBehavior: Router.ScrollToTopBehavior
}).run(function (Handler) {
  React.render(
      <Handler/>,
      content);
});
