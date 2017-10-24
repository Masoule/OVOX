import SessionButtons from './session_buttons';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons);
