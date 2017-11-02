import CommentForm from './session_form';
import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.session.currentUser ? true : false;
  const currentUser = state.session.currentUser
  let track = state.entities.tracks[ownProps.match.params.trackId]  || track

  let comment = {
    body: ""
  }

  return {
    errors: state.errors.comments,
    currentUser
    loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    // clearErrors: ()=> dispatch(clearErrors()),
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm));
