import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const clearCommentErrors = errors => ({
  type: CLEAR_COMMENT_ERRORS,
});

export const fetchComments = () => dispatch => (
  CommentAPIUtil.fetchComments().then(
    comments => (dispatch(receiveComments(comments))),
    errors => (dispatch(receiveCommentErrors(errors)))
  )
);

export const fetchComment = id => dispatch => (
  CommentAPIUtil.fetchComment(id).then(
    comment => (dispatch(receiveComment(comment))),
    errors => (dispatch(receiveCommentErrors(errors)))
  )
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment).then(
    comment => (dispatch(receiveComment(comment))),
    errors => (dispatch(receiveCommentErrors(errors)))
  )
);

export const deleteComment = id => dispatch => (
  CommentAPIUtil.deleteComment(id).then(
    id => (dispatch(removeComment(id))),
    errors => (dispatch(receiveCommentErrors(errors)))
  )
);
