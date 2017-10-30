import React from 'react';
// import Audio from 'react-audioplayer';

class Player extends React.Component {
  constructor(props) {
    super(props);
    // let currentTrack = this.props.currentTrack || null;
  }


  render() {
    let source = (this.props.currentTrack) ? this.props.currentTrack.track : '';
    return(
      <div className='player-box'>
        <audio
          controls="controls" src={source}
          >
        </audio>
      </div>
    );
  }

}

export default Player;

// In your render() function:
