import React from 'react';
// import Audio from 'react-audioplayer';

class Player extends React.Component {
  constructor(props) {
    super(props);
    // let currentTrack = this.props.currentTrack || null;
  }


  //The audio player was not resonding to the change of state when trying to change the play/pause status in componentWillReceiveProps. This turned out to be due to the fact that while the play function was called on the audioplayer instantaneously, the track metadata was not yet loaded. I fixed this by using the loadedmetadata event (which fires the assigned function when the metadata is loaded) in componentDidMount.

  componentDidMount() {
    this.audioPlayer.addEventListener("loadedmetadata", () => {
      console.log('loded meta', this)
      if (this.props.playing) {
        this.audioPlayer.play()
      } else {
        this.audioPlayer.pause()
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.playing !== nextProps.playing) {
      console.log('now play', nextProps)
      if(nextProps.playing) {
        this.audioPlayer.play()
      }
      else {
        this.audioPlayer.pause()
      }
    }
  }

  render() {
    // let source = (this.props.currentTrack) ? this.props.currentTrack.track : '';
    let source = (this.props.currentTrack) ? 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3' : ''
    return(
      <div className='player-box'>
        <audio
          controls="controls"
          src={source}
          ref={(audioPlayer) => { this.audioPlayer = audioPlayer}}
          >
        </audio>
      </div>
    );
  }

}

export default Player;
