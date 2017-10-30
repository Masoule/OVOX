import * as TrackAPIUtil from "../util/track_api_util";

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const REMOVE_TRACK = 'REMOVE_TRACK';
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

export const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
});

export const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const clearTrackErrors = errors => ({
  type: CLEAR_TRACK_ERRORS,
});

export const fetchTracks = () => dispatch => {
  return TrackAPIUtil.fetchTracks().then(
    (tracks) => (dispatch(receiveTracks(tracks))),
    errors => (dispatch(receiveTrackErrors(errors)))
  );
};

export const fetchTrack = (id) => dispatch => {
  return TrackAPIUtil.fetchTrack(id).then(
    (track) => (dispatch(receiveTrack(track))),
    errors => (dispatch(receiveTrackErrors(errors)))
  );
};

export const createTrack = (track) => dispatch => {
  return TrackAPIUtil.createTrack(track).then(
    (track) => (dispatch(receiveTrack(track))),
    errors => (dispatch(receiveTrackErrors(errors)))
  );
};

export const updateTrack = (track) => dispatch => {
  return TrackAPIUtil.updateTrack(track).then(
    (track) => (dispatch(receiveTrack(track))),
    errors => (dispatch(receiveTrackErrors(errors)))
  );
};

export const deleteTrack = (id) => dispatch => {
  return TrackAPIUtil.deleteTrack(id).then(
    (id) => (dispatch(removeTrack(id))),
    errors => (dispatch(receiveTrackErrors(errors)))
  );
};
