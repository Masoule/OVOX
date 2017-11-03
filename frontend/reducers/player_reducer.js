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
    // case PLAYING:
    //   playing = action.playing;
    //   newState = Object.assign({}, state, { playing });
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


// const PlayerReducer = (state= defaultState, action) => {
//   Object.freeze(state);
//   const entities = action.entities
//   switch (action.type) {
//     case RECEIVE_CURRENT_TRACK:
//       let newState = merge({}, state)
//       let currentTrack = action.currentTrack
//       let playing
//       if (currentTrack !== state.currentTrack){
//         playing = true
//       } else {
//         playing = !state.playing
//       }
//       if (state.currentTrack) {
//         entities.tracks[state.currentTrack.id].playing = false
//       }
//       entities.tracks[currentTrack.id].playing = playing
//       newState = Object.assign({}, newState, {playing}, {currentTrack}, {entities});
//       return newState;
//     case PLAY_BUTTON_PRESS:
//       newState = merge({}, state)
//       playing = action.play
//       entities.tracks[state.currentTrack.id].playing = playing
//       return Object.assign({}, newState, {playing}, {entities});
//     // case PLAYING:
//     //   let playing = action.playing;
//     //   newState = Object.assign({}, state, { playing });
//     //   return newState;
//     case RECEIVE_PLAY_STATUS:
//       let playStatus = action.playStatus;
//       newState = Object.assign({}, state, { playStatus });
//       return newState;
//     default:
//       return state;
//   }
// };
