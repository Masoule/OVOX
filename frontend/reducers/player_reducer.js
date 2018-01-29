import { RECEIVE_CURRENT_TRACK, TOGGLE, PLAYING, RECEIVE_PLAY_STATUS } from '../actions/player_actions';
import merge from 'lodash/merge';


const defaultState = Object.freeze(
  { currentTrack: null,
    playing: false,
    play_status: 0,
  }
);

const PlayerReducer = (state= defaultState, action) => {
  Object.freeze(state);
  let playing;
  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      let currentTrack = action.currentTrack
      return Object.assign({}, state, {currentTrack, playing: true})
    case TOGGLE:
      playing = !state.playing
      return Object.assign({}, state, {playing})
    case RECEIVE_PLAY_STATUS:
      let playStatus = action.playStatus;
      return Object.assign({}, state, { playStatus });
    default:
      return state;
  }
};

export default PlayerReducer;
