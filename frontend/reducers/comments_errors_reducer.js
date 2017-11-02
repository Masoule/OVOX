import { RECEIVE_COMMENT_ERRORS,
         RECEIVE_COMMENT,
         RECEIVE_COMMENTS,
         REMOVE_COMMENT,
         CLEAR_COMMENT_ERRORS} from '../actions/comment_actions';

const CommentErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return state.concat(action.errors.responseJSON);
    case RECEIVE_COMMENTS:
      return [];
      case RECEIVE_COMMENT:
      return [];
    case REMOVE_COMMENT:
      return [];
    case CLEAR_COMMENT_ERRORS:
      return [];
    default:
      return state;
  }
};

export default CommentErrorsReducer;
