'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import $ from 'jquery';
import _ from 'underscore';
import Events from 'events';
import assign from 'object-assign';

let _state = null;

const CHANGE_EVENT = "change";
const LIST_EVENTS_URL = "/api/event/list";


let EventStore = assign({}, Events.EventEmitter.prototype, {
    _state: null,
    _initState(){
        Promise.resolve($.ajax({
                url: LIST_EVENTS_URL,
                dataType: 'json'
        })).then(events => {
            this._state = events;
            this.emitChange();
        });

    },
    getState(id){
        let result = [];
        if (_.isNull(this._state)) {
            setTimeout(() => this._initState(), 10);
        } else {
            if (id) {
                result = _.find(this._state, event => {
                    return event.id === id;
                });
            } else {
                result = this._state;
            }
        }
        return result;
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
});

// Register to handle all updates
AppDispatcher.register(payload => {
    let action = payload.action;

    switch(action.actionType) {
        default: {
            return true;
            }
    }
});

module.exports = EventStore;
