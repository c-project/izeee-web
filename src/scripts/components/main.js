'use strict';

var IzeeeWebApp = require('./IzeeeWebApp'),
    ContactList = require('./ContactList'),
    AppLeftNav = require('./AppLeftNav'),
    ContactDetails = require('./ContactDetails'),
    React = require('react'),
    Router = require('react-router'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    Route = Router.Route,
    Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    mui = require('material-ui'),
    AppCanvas = mui.AppCanvas,
    AppBar = mui.AppBar;


injectTapEventPlugin();
require('style');

var content = document.querySelector('#content');

var App = React.createClass({
    mixins: [Router.State],
    render: function () {
        return (
            <AppCanvas>
                <AppBar title="IZEEE" onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap} />
                <AppLeftNav ref="leftNav" />
                <RouteHandler/>
            </AppCanvas>
        );
    },
    _onMenuIconButtonTouchTap: function() {
        this.refs.leftNav.toggle();
    }
});

var AppRoutes = (
  <Route name="app" handler={App} path="/">
    <Route name="contacts" path="/contact" handler={ContactList}/>
    <Route name="contact-details" path="/contact/:phone" handler={ContactDetails} />
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
