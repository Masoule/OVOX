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
  let newState;
  let playing;
  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      let currentTrack = action.currentTrack
      newState = Object.assign({}, state, {currentTrack, playing: true})
      return newState;
    case TOGGLE:
      playing = !state.playing
      newState = Object.assign({}, state, {playing})
      return newState;
      return newState;
    case RECEIVE_PLAY_STATUS:
      let playStatus = action.playStatus;
      newState = Object.assign({}, state, { playStatus });
      return newState;
    default:
      return state;
  }
};

export default PlayerReducer;
