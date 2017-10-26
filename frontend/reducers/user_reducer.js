import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  user: null,
});

const UserReducer = (state= defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USERS:
      const users = action.users;
      newState = merge({}, { users });
      return newState;
    case RECEIVE_USER:
      const user = action.user;
      newState = merge({}, state, { [user.id]: user });
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
