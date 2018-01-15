import Header from './header';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

  const mapStateToProps = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    // const headerType = currentUser ? 'user' : 'visitor'

    return {
      currentUser,
    };
  };


const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()).then(()=>ownProps.history.push('/')),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
