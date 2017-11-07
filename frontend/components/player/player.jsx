import React from 'react';
import PlayButtonContainer from './play_button_container'

class Player extends React.Component {
  constructor(props) {
    super(props);
    let currentTrack = this.props.currentTrack || null;
    }

  componentDidMount() {
    this.audioPlayer.addEventListener("loadedmetadata", () => {
      if (this.props.playing) {
        this.audioPlayer.play()
      } else {
        this.audioPlayer.pause()
      }
    })

    this.audioPlayer.addEventListener("timeupdate", () => {
    })

  }

  componentWillReceiveProps(nextProps) {
    if(this.props.playing !== nextProps.playing) {
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
    if (!track) {
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
    let source = (this.props.currentTrack) ? this.props.currentTrack.trackUrl : ''
    return(
      <div className='player'>
        <div className='player-box'>
          <div className='player-control'>

          </div>
          <div className='player-progress'>
            <audio
              src={source}
              ref={(audioPlayer) => { this.audioPlayer = audioPlayer}}
              >
            </audio>

            <div className='play'>
              <PlayButtonContainer
                track={this.props.currentTrack}/>
            </div>

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
