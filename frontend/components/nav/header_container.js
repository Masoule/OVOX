import Header from './header';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

  const mapStateToProps = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    const headerType = currentUser ? 'user' : 'visitor'

    return {
      currentUser: state.session.currentUser,
      headerType
    };
  };


const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()).then(()=>ownProps.history.push('/')),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));


//
// const mapStateToProps = (state, ownProps) => {
//   // let headerType;
//   // const path = ownProps.match.path
//   // if (state.session.currentUser) {
//   //   headerType = 'user';
//   // } else if ( !state.session.currentUser) {
//   //   headerType = 'general';
//   // } else if ( path === '/:userId' ) {
//   //   headerType = 'profile';
//   // } else if (path === '/:userId/:trackId') {
//   //   headerType = 'track';
//   // }
//
//   return {
//     // headerType,
//     currentUser: state.session.currentUser
//   };
// };
