'use strict';

import IzeeeWebApp from './IzeeeWebApp';
import ContactList from './ContactList';
import EventList from './EventList';
import AppLeftNav from './AppLeftNav';
import ContactDetails from './ContactDetails';
import EventDetails from './EventDetails'
import React from 'react/addons';
import Router from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin";
import mui from 'material-ui';
import reactMixin from 'react-mixin';

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
  <Route name="app" handler={App} path="/">
    <Route name="contacts" path="/contact" handler={ContactList}/>
    <Route name="events" path="/event" handler={EventList}/>
    <Route name="contact-details" path="/contact/:phone" handler={ContactDetails}/>
    <Route name="event-details" path="/event/:title" handler={EventDetail}/>
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
