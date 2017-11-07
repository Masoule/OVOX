export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const TOGGLE = 'TOGGLE';
export const PLAYING = 'PLAYING';
export const RECEIVE_PLAY_STATUS = 'RECEIVE_PLAY_STATUS';

export const receiveCurrentTrack = currentTrack => ({
  type: RECEIVE_CURRENT_TRACK,
  currentTrack
});

export const toggle = () => ({
  type: TOGGLE,
})

export const playing = playing => ({
  type: PLAYING,
  playing
});

export const receivePlayStatus = playStatus => ({
  type: RECEIVE_PLAY_STATUS,
  playStatus
});
