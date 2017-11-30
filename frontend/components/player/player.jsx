import React from 'react';
import PlayButtonContainer from './play_button_container'

class Player extends React.Component {
  constructor(props) {
    super(props);
    let currentTrack = this.props.currentTrack || null;
}

  componentDidMount() {
    this.setState({ rendered: true })
    this.audioPlayer.addEventListener("loadedmetadata", () => {
      if (this.props.playing) {
        this.audioPlayer.play()
      } else {
        this.audioPlayer.pause()
      }
    })

    this.audioPlayer.addEventListener('timeupdate', () => {
      $('#progressBar').attr("value", this.audioPlayer.currentTime / this.audioPlayer.duration);
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

  timeConvert (time) {
    let seconds = Number(time);
    let hr = Math.floor(seconds / 3600);
    let min = ("0" + Math.floor(seconds % 3600 / 60)).slice(-2);
    let sec = ("0" + Math.floor(seconds % 3600 % 60)).slice(-2);
    return hr > 0 ? `${hr}:${min}:${sec}` : `${min}:${sec}`;
  }

  trackDuration() {
    if(this.audioPlayer) {
      let duration = this.audioPlayer.duration;
      return this.timeConvert(duration);
    } else {
      return "0:00";
    }
  }

  trackTime() {
    if(this.audioPlayer) {
      let time = this.audioPlayer.currentTime;
      return this.timeConvert(time);
    } else {
      return "0:00";
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



  // <script>
  //   var audio = document.getElementById("myaudio");
  //   audio.volume = 0.2;
  // </script>


  render() {
    let source = (this.props.currentTrack) ? this.props.currentTrack.trackUrl : ''
    return(
      <div className='player'>
        <div className='player-box'>
          <div className='player-control'>

          </div>
          <div className='player-progress'>
            <audio
              id="audioPlayer"
              src={source}
              ref={(audioPlayer) => { this.audioPlayer = audioPlayer}}
              >
            </audio>

            <div className='player-play-pause'>
              <PlayButtonContainer
                track={this.props.currentTrack}/>
            </div>
            <p className="track-time">
              {this.trackTime()}
            </p>
            <progress
              id="progressBar"
              value="0"
              max="1">
            </progress>
            <p className="track-time">
              {this.trackDuration()}
            </p>
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
