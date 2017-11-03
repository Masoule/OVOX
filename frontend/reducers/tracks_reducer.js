import { RECEIVE_TRACKS,
         RECEIVE_TRACK,
         REMOVE_TRACK
       } from '../actions/track_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
// import { RECEIVE_USER } from '../actions/user_actions';

import merge from 'lodash/merge';

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let track;
  switch (action.type) {
    case RECEIVE_TRACKS:
      const tracks = merge({}, action.tracks );
      return tracks;
    case RECEIVE_TRACK:
      track = merge({}, state, { [action.data.track.id]: action.data.track });
      return track;
    case RECEIVE_COMMENT:
      track = state[action.comment.trackId]
      track = merge({}, track);
      track.commentIds.push(action.comment.id)
      let newState = merge({}, state, { [track.id]:track });
      return newState;
    case REMOVE_TRACK:
      newState = Object.assign({}, state);
      delete newState[`${action.trackId}`];
      return newState;
    default:
      return state;
  }
};


export default TracksReducer;
