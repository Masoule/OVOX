import { combineReducers } from 'redux';
import tracks from './tracks_reducer';
import users from './users_reducer';

const EntitiesReducer = combineReducers({
  tracks,
  users,
});

export default EntitiesReducer;
