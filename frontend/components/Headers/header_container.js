import Header from './header';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  let headerType;
  const path = ownProps.match.path
  if (path === '/') {
    headerType = 'general';
  } else if ( path === '/stream' ) {
    headerType = 'user';
  } else if ( path === '/:userId' ) {
    headerType = 'profile';
  } else if (path === '/:userId/:trackId') {
    headerType = 'track';
  }

  return {
    headerType,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
