import TrackForm from './track_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTrack, fetchTrack, updateTrack, receiveTrackErrors, clearTrackErrors } from '../../actions/track_actions';


const mapStateToProps = (state, ownProps) => {
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
   track = state.entities.tracks[ownProps.match.params.trackId]  || track
   if (track.description === null) { track.description = ''} ;
 }
  return {
    currentUser: state.session.currentUser,
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
    receiveTrackErrors: (errors)=> dispatch(receiveTrackErrors(errors)),
    clearTrackErrors: ()=> dispatch(clearTrackErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm));
