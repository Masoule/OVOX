import { RECEIVE_USERS,
         RECEIVE_USER
       } from '../actions/user_actions';

import merge from 'lodash/merge';


const UsersReducer = (state= {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, action.users );
    case RECEIVE_USER:
      const user = action.user;
      return Object.assign({}, state, { user });
    default:
      return state;
  }
};


export default UsersReducer;
