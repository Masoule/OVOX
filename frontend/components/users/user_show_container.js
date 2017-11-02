import UserShow from './user_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const currentUser = state.currentUser;
  const user = state.entities.users.user || null;
  // const tracks = user !== null ? user.tracks : {} || {}
 //debugger
  return {
    user,
    userId,
    currentUser,
    // tracks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow));
