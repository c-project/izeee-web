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

//TODO change to AJAX
let sequence = 100;

function _createEvent(event) {
  event.id = sequence++;
  _state = _state || [];
  _state.push(event);
}

let EventStore = assign({}, Events.EventEmitter.prototype, {
    _initState(){
        Promise.resolve($.ajax({
                url: LIST_EVENTS_URL,
                dataType: 'json'
        })).then(events => {
            _state = events;
            this.emitChange();
        });

    },
    getState(id){
        let result = [];
        if (_.isNull(_state)) {
            setTimeout(() => this._initState(), 10);
        } else {
            if (id) {
                result = _.find(_state, event => {
                    return event.id === parseInt(id, 10);
                });
            } else {
                result = _state;
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
AppDispatcher.register(action => {
    switch(action.type) {
        case AppConstants.CREATE_NEW_EVENT: {
          _createEvent(action.event);
          EventStore.emitChange();
          break;
        }
        default: {
            return true;
            }
    }
});

module.exports = EventStore;
