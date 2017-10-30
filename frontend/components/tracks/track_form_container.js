import TrackForm from './track_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createTrack, fetchTrack, updateTrack, receiveTrackErrors, clearTrackErrors} from '../../actions/track_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger
  let track = {
    title: "",
    artist_name: "",
    description: "",
    genre: "",
    imageUrl: '',
    image: null,
    trackUrl: "",
    track: null,
  }
  let formType;

  if (ownProps.match.path === '/upload'){
   formType = 'new';
 } else {
   formType = 'edit'
   track = state.tracks[ownProps.match.params.trackId];
 }
  return {
    formType,
    track,
    errors: state.errors.tracks,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.match.path === '/upload' ? createTrack : updateTrack;
  return {
    processForm: (track) => dispatch(processForm(track)),
    fetchTrack: id => dispatch(fetchTrack(id)),
    // fetchTracks: ()=> dispatch(fetchTracks()),
    receiveTrackErrors: (errors)=> dispatch(receiveTrackErrors(errors)),
    clearTrackErrors: ()=> dispatch(clearTrackErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm));
