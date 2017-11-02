import { combineReducers } from 'redux';
import tracks from './tracks_reducer';
import users from './users_reducer';
import comments from './comments_reducer';

const EntitiesReducer = combineReducers({
  tracks,
  users,
  comments,
});

export default EntitiesReducer;
