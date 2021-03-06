import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_TRACK } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  comment: null,
});

const CommentReducer = (state= defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, state, action.data.comments );
    case RECEIVE_COMMENTS:
      return merge({}, action.comments );
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      let newState = Object.assign({}, state);
      delete newState[`${action.commentId}`];
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
