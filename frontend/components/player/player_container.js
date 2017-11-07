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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
