import React from 'react';
// import Audio from 'react-audioplayer';

class Player extends React.Component {
  constructor(props) {
    super(props);
    }
    // let currentTrack = this.props.currentTrack || null;



  //The audio player was not resonding to the change of state when trying to change the play/pause status in componentWillReceiveProps. This turned out to be due to the fact that while the play function was called on the audioplayer instantaneously, the track metadata was not yet loaded. I fixed this by using the loadedmetadata event (which fires the assigned function when the metadata is loaded) in componentDidMount.

  componentDidMount() {
    this.audioPlayer.addEventListener("loadedmetadata", () => {
      // console.log('loded meta', this)
      if (this.props.playing) {
        this.audioPlayer.play()
      } else {
        this.audioPlayer.pause()
      }
    })

    this.audioPlayer.addEventListener("timeupdate", () => {
      // console.log('loded meta', this)
      
    })
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.playing !== nextProps.playing) {
      // console.log('now play', nextProps)
      if(nextProps.playing) {
        this.audioPlayer.play()
      }
      else {
        this.audioPlayer.pause()
      }
    }
  }

  trackInfo () {
    let track = this.props.currentTrack
    // debugger
    if (track === null) {
      return ''
    } else {
      return (
        <div className='track-info-box'>
          <div className='track-info-thumb-box'>
            <img className="track-info-thumb"
              src={track.imageUrl}></img>
          </div>
          <div className='track-content'>
            <div className='track-header'>
              <div className='track-info'>
                <div className='track-artist'>
                  {track.artist_name}
                </div>

                <div className='track-title'>
                  {track.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    // let source = (this.props.currentTrack) ? this.props.currentTrack.track : '';
    let source = (this.props.currentTrack) ? this.props.currentTrack.trackUrl : ''
    // debugger
    return(
      <div className='player'>
        <div className='player-box'>
          <div className='player-control'>

          </div>
          <div className='player-progress'>
            <audio
              controls="controls"
              src={source}
              ref={(audioPlayer) => { this.audioPlayer = audioPlayer}}
              >
            </audio>
          </div>
          <div className='volume'>

          </div>

          {this.trackInfo()}
        </div>
      </div>
    );
  }

}

export default Player;
