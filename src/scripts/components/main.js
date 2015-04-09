'use strict';

var IzeeeWebApp = require('./IzeeeWebApp'),
    ContactList = require('./ContactList'),
    React = require('react'),
    Router = require('react-router'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    Route = Router.Route,
    Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    mui = require('material-ui'),
    AppCanvas = mui.AppCanvas,
    AppBar = mui.AppBar,
    LeftNav = mui.LeftNav;

injectTapEventPlugin();
require('style');

var content = document.getElementById('content');

var App = React.createClass({
  render: function () {
    return (
        <div>
          <header>
            <ul>
              <li><Link to="app">Dashboard</Link></li>
              <li><Link to="contacts">Contacts</Link></li>
            </ul>
          </header>

          <RouteHandler/>
        </div>
    );
  }
});

var AppRoutes = (
  <Route name="app" handler={App} path="/">
    <Route name="contacts" handler={ContactList}/>
    <DefaultRoute handler={IzeeeWebApp}/>
  </Route>
);

var menuItems = [
    {route: 'app', text:'Home'},
    {route: 'contacts', text: 'Contacts'}
];

Router.create({
    routes: AppRoutes,
    scrollBehavior: Router.ScrollToTopBehavior
}).run(function (Handler) {
  React.render(
      <AppCanvas>
          <AppBar title="IZEEE">

          </AppBar>
          <LeftNav menuItems={menuItems} docked={false}/>
          <Handler/>
      </AppCanvas>,
      content);
});
