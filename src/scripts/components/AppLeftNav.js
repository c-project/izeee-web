'use strict';

var React = require('react'),
    Router = require('react-router'),
    mui = require('material-ui'),
    LeftNav = mui.LeftNav;

var menuItems = [
    {route: 'app', text:'Home'},
    {route: 'contacts', text: 'Contacts'}
];
console.log(Router.Navigation, Router.State);
var AppLeftNav = React.createClass({
    mixins: [Router.Navigation, Router.State],
    getInitialState: function() {
        return {
            selectedIndex: null
        };
    },
    render: function(){
        var header = React.createElement("div", {className: "logo", onClick: this._onHeaderClick}, "MENU");
        return (
            React.createElement(mui.LeftNav, {
                ref: "leftNav",
                docked: false,
                isInitiallyOpen: false,
                header: header,
                menuItems: menuItems,
                selectedIndex: this._getSelectedIndex(),
                onChange: this._onLeftNavChange})
        );
    },
    toggle: function() {
        this.refs.leftNav.toggle();
    },
    _getSelectedIndex: function() {
        var currentItem;
        for (var i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.isActive(currentItem.route)) {
                return i;
            }
        }
    },

    _onLeftNavChange: function(e, key, payload) {
        this.transitionTo(payload.route);
    },

    _onHeaderClick: function() {
        this.transitionTo('root');
        this.refs.leftNav.close();
    }
});

module.exports = AppLeftNav;
