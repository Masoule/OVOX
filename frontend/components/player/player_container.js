import React from 'react';
import { connect } from 'react-redux';
import {  RECEIVE_CURRENT_TRACK, PLAYING, RECEIVE_PLAY_STATUS } from '../../actions/player_actions'

import Player from './player';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
