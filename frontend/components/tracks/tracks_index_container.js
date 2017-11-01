import TrackIndex from './track_index';
import { connect } from 'react-redux';
import {fetchTracks , fetchTrack, createTrack, receiveTrackErrors, clearTrackErrors} from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.tracks,
    currentUser: state.session.currentUser,
    tracks: Object.keys(state.entities.tracks).map(id => state.entities.tracks[id]),
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
