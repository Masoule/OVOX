import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const defaultState = Object.freeze({
  comment: null,
});

const LikeReducer = (state= defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_LIKE:
    case REMOVE_LIKE:
    default:
      return state;
  }
};

export default LikeReducer;
