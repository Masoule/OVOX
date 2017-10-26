import { combineReducers } from 'redux';
import session from './session_reducer';
import user from './user_reducer';
import tracks from './tracks_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  session,
  user,
  tracks,
  errors,
});

export default RootReducer;
