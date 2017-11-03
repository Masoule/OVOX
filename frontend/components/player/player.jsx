import React from 'react';
import PlayButtonContainer from './play_button_container'

class Player extends React.Component {
  constructor(props) {
    super(props);
    let currentTrack = this.props.currentTrack || null;
    }

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


    // currentTrack.addEventListener("timeupdate", timeUpdate, false);
    //
    // timeUpdate() {
    // 	let playPercent = 100 * (currentTrack.currentTime / duration);
    // 	let marginLeft = playPercent + "%";
    // }

    //
    // this.audioPlayer.addEventListener("play", (e) => {
    //
    //   // this.props.toggle()
    // })
    //
    // this.audioPlayer.addEventListener("pause", () => {
    //   // this.props.toggle()
    // })
  }

  componentWillReceiveProps(nextProps) {
    //
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
    //
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
    // let source = (this.props.currentTrack) ? this.props.currentTrack.track : '';
    let source = (this.props.currentTrack) ? this.props.currentTrack.trackUrl : ''
    //
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


// <div>
//   <button onclick={document.getElementById('player').play()}>
//     Play
//   </button>
//   <button onclick={document.getElementById('player').pause()}>
//     Pause
//   </button>
//   <button onclick={document.getElementById('player').volume += 0.1}>
//     Vol+
//   </button>
//   <button onclick={document.getElementById('player').volume -= 0.1}>
//     Vol-
//   </button>
// </div>
