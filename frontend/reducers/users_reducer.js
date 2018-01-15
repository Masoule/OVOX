import { RECEIVE_USERS,
         RECEIVE_USER
       } from '../actions/user_actions';

import merge from 'lodash/merge';


const UsersReducer = (state= {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USERS:
      newState = merge({}, action.users );
      return newState;
    case RECEIVE_USER:
    const user = action.user;
      newState = Object.assign({}, state, { user });
      return newState;
    default:
      return state;
  }
};


export default UsersReducer;
