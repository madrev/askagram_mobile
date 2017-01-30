import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from "../actions/session_actions.js";
import merge from 'lodash/merge';

const _defaultState =  {
    currentUser: null,
    errors: null
  };

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    // TODO: remove the conditional after error handling is fixed
      if (action.currentUser.username) {
        return merge( {}, _defaultState, { currentUser: action.currentUser} );
      } else {
        return state;
      }
    case RECEIVE_SESSION_ERRORS:
      return merge( {}, state, { errors: action.errors} );
    case CLEAR_ERRORS:
      return merge( {}, state, { errors: null });
    default:
      return state;
  }
};

export default sessionReducer;
