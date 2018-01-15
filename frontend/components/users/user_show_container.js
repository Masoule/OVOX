import UserShow from './user_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { deleteTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const currentUser = state.session.currentUser;
  const user = state.entities.users.user || null;

  return {
      user,
      userId,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow));
