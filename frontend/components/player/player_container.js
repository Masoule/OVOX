// import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentTrack, toggle, playing, receivePlayStatus } from '../../actions/player_actions'

import Player from './player';

const mapStateToProps = state => {
  return{
    currentTrack: state.player.currentTrack,
    playing: state.player.playing,
    playStatus: state.player.playStatus
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      toggle: () => dispatch(toggle()),
      receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),    
    }
};
/*
const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    processForm: (track) => dispatch(processForm(track)),
    fetchTrack: id => dispatch(fetchTrack(id)),
    // fetchTracks: ()=> dispatch(fetchTracks()),
    receiveTrackErrors: (errors)=> dispatch(receiveTrackErrors(errors)),
    clearTrackErrors: ()=> dispatch(clearTrackErrors()),
  };
};
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
//
