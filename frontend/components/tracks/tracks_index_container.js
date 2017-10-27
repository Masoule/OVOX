import TrackIndex from './track_index';
import { connect } from 'react-redux';
import {fetchTracks , fetchTrack, createTrack, receiveErrors, clearErrors} from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    errors: state.errors.tracks,
    tracks: Object.keys(state.tracks).map(id => state.tracks[id])
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const action = ownProps.match.path === "/login" ? login : signup;
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    clearErrors: ()=> dispatch(clearErrors()),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
