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

export const receiveTrack = data => ({
  type: RECEIVE_TRACK,
  data
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

export const fetchTracks = () => dispatch => (
  TrackAPIUtil.fetchTracks().then(
    tracks => (dispatch(receiveTracks(tracks))),
    errors => (dispatch(receiveTrackErrors(errors)))
  )
);

export const fetchTrack = (id) => dispatch => (
  TrackAPIUtil.fetchTrack(id).then(
    track => (dispatch(receiveTrack(track))),
    errors => (dispatch(receiveTrackErrors(errors)))
  )
);

export const createTrack = track => dispatch => (
  TrackAPIUtil.createTrack(track).then(
    track => (dispatch(receiveTrack(track))),
    errors => (dispatch(receiveTrackErrors(errors)))
  )
);

export const updateTrack = track => dispatch => (
  TrackAPIUtil.updateTrack(track).then(
    track => (dispatch(receiveTrack(track))),
    errors => (dispatch(receiveTrackErrors(errors)))
  )
);

export const deleteTrack = id => dispatch => (
  TrackAPIUtil.deleteTrack(id).then(
      id => (dispatch(removeTrack(id))),
      errors => (dispatch(receiveTrackErrors(errors)))
    )
    .then(window.location.reload()
  )
);
