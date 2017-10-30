import { RECEIVE_CURRENT_TRACK, PLAYING, RECEIVE_PLAY_STATUS } from '../actions/player_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  currentTrack: null,
  playing: false,
  play_status: 0,
});

const PlayerReducer = (state= defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      const currentTrack = action.currentTrack
      newState = Object.assign({}, state, { currentTrack });
      return { currentTrack };
    case PLAYING:
      newState = Object.assign({}, state, { [playing]: action.playing });
      return newState;
    case RECEIVE_PLAY_STATUS:
      newState = merge({}, state, { [playStatus]: action.playStatus });
      return newState;
    default:
      return state;
  }
};

export default PlayerReducer;
