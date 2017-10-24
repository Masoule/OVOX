import SessionForm from './session_form';
import SessionButtons from './session_buttons';
import { connect } from 'react-redux';
import { login , logout, signUp } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.path === "/login" ? "Login" : "Sign Up";
  const loggedIn = state.session.currentUser ? true : false;
  return {
    errors: state.errors.session,
    currentUser: state.session.currentUser,
    formType,
    loggedIn,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/login" ? login : signUp;
  return {
    processForm: (user) => dispatch(action(user)),
    logout: () => dispatch(logout()),
  };
};

export const Form =  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));

export const Buttons =  connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons);
