import TrackForm from './track_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createTrack, updateTrack, receiveTrackErrors, clearTrackErrors} from '../../actions/track_actions';


const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.path === '/upload' ? 'new' : 'edit'
  const track = ownProps.match.path === '/upload' ?
  { title: "",
    artist_name: "",
    description: "",
    genre: "",
    image: "",
    track: "",
  } : state.tracks[ownProps.match.params.trackId];

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
    receiveTrackErrors: (errors)=> dispatch(receiveTrackErrors(errors)),
    clearTrackErrors: ()=> dispatch(clearTrackErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm));
