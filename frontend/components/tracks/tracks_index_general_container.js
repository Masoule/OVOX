import TrackIndex from './track_index';
import { connect } from 'react-redux';
import {fetchTracks , fetchTrack, createTrack, receiveTrackErrors, clearTrackErrors} from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.tracks,
    currentUser: state.session.currentUser.user,
    tracks: Object.keys(state.entities.tracks).map(id => state.entities.tracks[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    clearErrors: ()=> dispatch(clearTrackErrors()),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);

//
// const mapStateToProps = (state, ownProps) => {
//   const indexType = ownProps.match.path === "/" ? "general" : "user";
//   // const loggedIn = state.session.currentUser ? true : false;
//   let tracks = {};
//   if (indexType === 'general') {
//     tracks = state.entities.tracks
//   } else if (ownProps.match.path === "/stream") {
//     let trackIds = state.session.currentUser.tracks;
//     trackIds.forEach((id) => tracks = merge { tracks, fetchTrack(id) )
//   }  // else if (ownProps.match.path === "/users/") {}
//
//   return {
//     errors: state.errors.tracks,
//     currentUser: state.session.currentUser,
//     tracks,
//     indexType,
//   };
//
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   // const action = ownProps.match.path === "/login" ? login : signup;
//   return {
//     fetchTracks: (tracks) => dispatch(fetchTracks(tracks)),
//     fetchTrack: (track) => dispatch(fetchTrack(track)),
//     clearErrors: ()=> dispatch(clearErrors()),
//   };
// };
