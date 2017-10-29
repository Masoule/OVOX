import React from 'react';
import TrackIndexItem from './track_index_item';
// import TrackFormContainer from './Track_form_container';

class TrackIndex extends React.Component {

  componentDidMount(){
    this.props.fetchTracks();
  }

  render (){
    return (
      <div className='track-index-box'>
        <ul className='track-index'>
          {
            this.props.tracks.map( track => (
              <TrackIndexItem
                key={track.id}
                currentUser={this.props.currentUser}
                track={track} />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TrackIndex;


// const trackItem = this.props.indexType === general ? 'TrackThumbnailItem' : 'TrackIndexItem'
