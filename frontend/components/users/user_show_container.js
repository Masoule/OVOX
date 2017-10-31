import UserShow from './user_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const users = Object.keys(state.entities.users).map(id => state.entities.users[id])
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  const currentUser = state.currentUser;

  // debugger
  return {
    userId,
    user,
    users,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow));
