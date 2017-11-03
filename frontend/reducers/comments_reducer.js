import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_TRACK } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  comment: null,
});

const CommentReducer = (state= defaultState, action) => {
  Object.freeze(state);
  let comments;
  switch (action.type) {
    case RECEIVE_TRACK:
      comments = merge({}, state, action.data.comments );
      return comments;
    case RECEIVE_COMMENTS:
      comments = merge({}, action.comments );
      return comments;
    case RECEIVE_COMMENT:
      const comment = merge({}, state, { [action.comment.id]: action.comment });
      return comment;
    case REMOVE_COMMENT:
      let newState = Object.assign({}, state);
      delete newState[`${action.commentId}`];
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
