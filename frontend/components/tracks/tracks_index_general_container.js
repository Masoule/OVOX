import TrackIndexGeneral from './track_index_general';
import { connect } from 'react-redux';
import {fetchTracks, fetchTrack, createTrack, deleteTrack, receiveTrackErrors, clearTrackErrors} from '../../actions/track_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.tracks,
    currentUser: state.session.currentUser,
    tracks: Object.keys(state.entities.tracks).map(id => state.entities.tracks[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    clearErrors: ()=> dispatch(clearTrackErrors()),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndexGeneral);
