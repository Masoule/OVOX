import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(
    (users) => (dispatch(receiveUsers(users))),
    errors => (dispatch(receiveErrors(errors)))
  )
);

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(
    (user) => (dispatch(receiveUser(user))),
    errors => (dispatch(receiveErrors(errors)))
  )
);

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_USER_ERRORS,
  errors: []
});
