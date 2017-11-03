import { connect } from 'react-redux';
import { receiveCurrentTrack, playing, toggle, receivePlayStatus } from '../../actions/player_actions'

import PlayButton from './play_button';

const mapStateToProps = state => {
  return{
    currentTrack: state.player.currentTrack,
    playing: state.player.playing,
    playStatus: state.player.playStatus
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
    toggle: () => dispatch(toggle())
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
