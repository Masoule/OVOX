import TrackShow from './track_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTrack, fetchTracks, deleteTrack } from '../../actions/track_actions';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const trackId = ownProps.match.params.trackId;
  const track = state.entities.tracks[trackId];
  const currentUser = state.sessioncurrentUser;
  let comments = []
  if (track && track.commentIds) {
    comments = track.commentIds.map ( (id) => (state.entities.comments[id]))
  }

  return {
    comments,
    userId,
    trackId,
    track,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    fetchTracks: () => dispatch(fetchTracks()),
    fetchComments: () => dispatch(fetchComments()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow));
