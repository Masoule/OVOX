import { RECEIVE_TRACK_ERRORS,
         RECEIVE_TRACK,
         RECEIVE_TRACKS,
         CLEAR_TRACK_ERRORS} from '../actions/track_actions';

const TrackErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_TRACKS:
      return [];
    case RECEIVE_TRACK:
      return [];
    case CLEAR_TRACK_ERRORS:
      return [];
    default:
      return state;
  }
};

export default TrackErrorsReducer;
