import { RECEIVE_SESSION_ERRORS,
        RECEIVE_CURRENT_USER,
        CLEAR_SESSION_ERRORS} from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let errors;
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
