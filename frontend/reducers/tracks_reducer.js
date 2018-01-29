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
      return merge({}, action.tracks );
    case RECEIVE_TRACK:
      return merge({}, state, { [action.data.track.id]: action.data.track });
    case RECEIVE_COMMENT:
      track = state[action.comment.trackId]
      track = merge({}, track);
      track.commentIds.push(action.comment.id)
      return merge({}, state, { [track.id]:track });
    case REMOVE_TRACK:
      let newState = Object.assign({}, state);
      delete newState[`${action.trackId}`];
      return newState;
    default:
      return state;
  }
};


export default TracksReducer;
