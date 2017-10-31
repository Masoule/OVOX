import React from 'react';
import { connect } from 'react-redux';
import {  receiveCurrentTrack, playing, receivePlayStatus } from '../../actions/player_actions'

import Player from './player';

const mapStateToProps = state => {

  return{
    currentTrack: state.player.currentTrack,
    playing: state.player.playing,
    playStatus: state.player.playStatus
  }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
//
