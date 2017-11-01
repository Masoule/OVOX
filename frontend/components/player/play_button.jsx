import React from 'react';
import { receiveCurrentTrack, playing, receivePlayStatus } from '../../actions/player_actions'
// import { Link } from 'react-router-dom';

class PlayButton extends React.Component  {

  handleClick() {
    dispatch(receiveCurrentTrack(this.props.track))
    //setTimeout(() => {
      // dispatch(playing(true))

    //}, 10)
  }
  render() {
    return(
      <div className='play-button'
        onClick={this.handleClick.bind(this)}>
        {this.props.track.playing ? '||' : '>'}
      </div>
    );

  }
}


export default PlayButton;
