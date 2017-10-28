import React from 'react';
import TrackShowItem from './track_show_item';
// import TrackFormContainer from './Track_form_container';

class TrackShow extends React.Component {

  componentDidMount(){
    this.props.fetchTrack(this.props.trackId);
    this.props.fetchTracks();
  }

  render (){
    const content = this.props.track ? <TrackShowItem
      track={this.props.track} /> : null
    return (
      <div className='track-show'>
        { content }
      </div>
    )
  }
}

export default TrackShow;
