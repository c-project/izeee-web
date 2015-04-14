'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var $ = require('jquery'),
    _ = require('underscore'),
    EventEmitter = require('events').EventEmitter;

var _state = null;

var CHANGE_EVENT = "change";
var LIST_USERS_URL = "/api/user/list";


var ContactStore = _.extend(EventEmitter.prototype, {
    _state: null,
    _initState: function(){
        Promise.resolve($.ajax({
                url: LIST_USERS_URL,
                dataType: 'json'
        })).then(function(contacts){
            this._state = contacts;
            this.emitChange();
        }.bind(this));

    },
    getState: function(id){
        var result = [];
        if (_.isNull(this._state)) {
            setTimeout(function(){
                this._initState();
            }.bind(this), 10);
        } else {
            result = this._state;
        }
        return result;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
});

// Register to handle all updates
AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        default: {
            return true;
            }
    }
});

module.exports = ContactStore;
