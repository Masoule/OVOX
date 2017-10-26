import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  track: null,
});

const UserReducer = (state= defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TRACKS:
      const tracks = action.tracks;
      newState = merge({}, { tracks });
      return newState;
    case RECEIVE_TRACK:
      const track = action.track;
      newState = merge({}, state, { [track.id]: track });
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
