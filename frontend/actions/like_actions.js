import * as likeAPIUtil from '../util/like_api_util';

export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const addLike = like => ({
  type: "ADD_LIKE",
  like
});

export const removeLike = like => ({
  type: "REMOVE_LIKE",
});

export const createLike = like => dispatch => (
  likeAPIUtil.createLike(like).then(
    like => dispatch(addLike(like)))
);

export const deleteLike = like => dispatch => (
  likeAPIUtil.deleteLike(like).then(
    like => dispatch(removeLike(like))
  );
);
