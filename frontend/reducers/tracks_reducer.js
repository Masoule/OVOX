import { RECEIVE_TRACKS,
         RECEIVE_TRACK,
         REMOVE_TRACK
       } from '../actions/track_actions';
// import { RECEIVE_USER } from '../actions/user_actions';

import merge from 'lodash/merge';

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      const tracks = merge({}, action.tracks );
      return tracks;
    case RECEIVE_TRACK:  
      const track = merge({}, state, { [action.data.track.id]: action.data.track });
      return track;
    case REMOVE_TRACK:
      let newState = Object.assign({}, state);
      delete newState[`${action.trackId}`];
      return newState;
    default:
      return state;
  }
};


export default TracksReducer;
