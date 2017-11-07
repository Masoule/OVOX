import React from 'react';
import { receiveCurrentTrack } from '../../actions/player_actions'

class PlayButton extends React.Component  {
  constructor (props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (!this.props.currentTrack) {
      this.props.receiveCurrentTrack(this.props.track)
      return;
    }

    if (this.props.currentTrack.id === this.props.track.id) {
      this.props.toggle()
    } else {
      this.props.receiveCurrentTrack(this.props.track)
    }

  }

  render() {
    let playing;
    if (this.props.currentTrack) {
      if (this.props.currentTrack.id === this.props.track.id) {
        playing = this.props.playing;
      }
    } else {
      playing = false;
    }

    return(
      <div className='play-button'
        onClick={this.handleClick}>
        { playing ? <img className="play-icon"
          src={window.pause}></img> : <img className="pause-icon"
            src={window.play}></img> }
      </div>
    );

  }
}


export default PlayButton;
