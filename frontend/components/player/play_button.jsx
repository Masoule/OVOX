import React from 'react';
import { receiveCurrentTrack } from '../../actions/player_actions'

class PlayButton extends React.Component  {
  constructor (props){
    super(props);
    // let playing = false;
    this.handleClick = this.handleClick.bind(this)
  }

  // componentWillReceiveProps (newProps) {
  //   if (newProps.currentTrack === this.props.track) {
  //     this.playing = this.props.playing
  //   } else {
  //     this.playing = false
  //   }
  // }

  handleClick() {
    // this.playing = !this.playing
    if (!this.props.currentTrack) {
      this.props.receiveCurrentTrack(this.props.track)
      // this.playing = true;
      return;
    }

    if (this.props.currentTrack.id === this.props.track.id) {
      this.props.toggle()
      // this.playing = this.props.playing;
    } else {
      this.props.receiveCurrentTrack(this.props.track)
      // this.playing = false;
      // this.playing = !this.playing
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


//setTimeout(() => {
  // dispatch(playing(true))

//}, 10)
