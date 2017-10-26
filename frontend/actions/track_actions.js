import * as APIUtil from "../util/track_api_util";

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const CLEAR_TRACK_ERRORS = 'CLEAR_TRACK_ERRORS';

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_TRACK_ERRORS,
  errors: []
});

export const fetchTracks = () => dispatch => {
  return APIUtil.fetchTracks().then(
    (tracks) => (dispatch(receiveTracks(tracks))),
    errors => (dispatch(receiveErrors(errors)))
  );
};

export const fetchTrack = (id) => dispatch => {
  return APIUtil.fetchTrack(id).then(
    (track) => (dispatch(receiveTrack(track))),
    errors => (dispatch(receiveErrors(errors)))
  );
};

export const createTrack = (track) => dispatch => {
  return APIUtil.createTrack(track).then(
    (track) => (dispatch(receiveTrack(track))),
    errors => (dispatch(receiveErrors(errors)))
  );
};
