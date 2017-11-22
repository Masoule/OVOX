import SessionForm from './session_form';
import { connect } from 'react-redux';
import {login , signup, clearErrors} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.path === "*/login" ? "Login" : "Sign Up";
  const loggedIn = state.session.currentUser ? true : false;
  return {
    errors: state.errors.session,
    formType,
    loggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "*/login" ? login : signup;
  return {
    processForm: (user) => dispatch(action(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: ()=> dispatch(clearErrors()),
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
