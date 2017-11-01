import { RECEIVE_CURRENT_TRACK, PLAYING, RECEIVE_PLAY_STATUS } from '../actions/player_actions';
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
  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      let currentTrack = action.currentTrack
      let playing
      if (currentTrack !== state.currentTrack){
        playing = true
      } else {
        playing = !state.playing
      }
      let newState = merge({}, state)
      //const {entities} = action
      const entities = action.entities
      entities.tracks[currentTrack.id].playing = playing
      newState = Object.assign({}, newState, {playing}, {currentTrack}, {entities});
      return newState;
    // case PLAYING:
    //   let playing = action.playing;
    //   newState = Object.assign({}, state, { playing });
    //   return newState;
    case RECEIVE_PLAY_STATUS:
      let playStatus = action.playStatus;
      newState = Object.assign({}, state, { playStatus });
      return newState;
    default:
      return state;
  }
};

export default PlayerReducer;
