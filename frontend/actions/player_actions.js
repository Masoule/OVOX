// current_stream: {   // the track in the audioplayer
//     1: {
//       track_id: 1,
//       playing: true,  //true for playing, false for paused
//       play_status: 64, //how far the track is played, in seconds
//     },

export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const PLAYING = 'PLAYING';
export const RECEIVE_PLAY_STATUS = 'RECEIVE_PLAY_STATUS';

export const receiveCurrentTrack = currentTrack => ({
  type: RECEIVE_CURRENT_TRACK,
  currentTrack
});

export const playing = playing => ({
  type: PLAYING,
  playing
});

export const receivePlayStatus = playStatus => ({
  type: RECEIVE_PLAY_STATUS,
  playStatus
});
