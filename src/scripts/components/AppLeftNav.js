'use strict';

import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';
let LeftNav = mui.LeftNav;

let menuItems = [
    {route: 'app', text:'Home'},
    {route: 'contacts', text: 'Contacts'},
    {route: 'events', text: 'Events'}
];

let AppLeftNav = React.createClass({
    mixins: [Router.Navigation, Router.State],
    getInitialState() {
        return {
            selectedIndex: null
        };
    },
    render(){
        let header = React.createElement("div", {className: "logo", onClick: this._onHeaderClick}, "MENU");
        return (
            React.createElement(mui.LeftNav, {
                ref: "leftNav",
                docked: false ,
                isInitiallyOpen: false,
                header: header,
                menuItems: menuItems,
                selectedIndex: this._getSelectedIndex(),
                onChange: this._onLeftNavChange})
        );
    },
    toggle() {
        this.refs.leftNav.toggle();
    },
    _getSelectedIndex() {
        let currentItem;
        for (let i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.isActive(currentItem.route)) {
                return i;
            }
        }
    },

    _onLeftNavChange(e, key, payload) {
        this.transitionTo(payload.route);
    },

    _onHeaderClick() {
        this.transitionTo('root');
        this.refs.leftNav.close();
    }
});

module.exports = AppLeftNav;
