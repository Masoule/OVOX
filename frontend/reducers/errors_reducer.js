import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import user from './user_errors_reducer';
import tracks from './track_errors_reducer';
import comments from './comments_errors_reducer';

export default combineReducers({
  session,
  user,
  tracks,
  comments,
});
