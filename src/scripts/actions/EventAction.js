import Dispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

module.exports = {
  createEvent(event) {
    Dispatcher.dispatch({
      type: ActionTypes.CREATE_NEW_EVENT,
      event:event
    });
  }
}
