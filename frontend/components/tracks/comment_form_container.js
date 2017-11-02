import CommentForm from './comment_form';
import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.session.currentUser ? true : false;
  const currentUser = state.session.currentUser;
  const trackId = ownProps.match.params.trackId;
  const track = state.entities.tracks[ownProps.match.params.trackId] || track

  return {
    track,
    currentUser,
    loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createComment: (comment)=> dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm));
