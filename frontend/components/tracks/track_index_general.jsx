import React from 'react';
import TrackIndexItem from './track_index_item';
import Header from '../nav/header_container'
// import TrackFormContainer from './Track_form_container';

class TrackIndexGeneral extends React.Component {

  componentDidMount(){
    this.props.fetchTracks();
  }

  render (){
    return (
      <div>
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
      </div>
    )
  }
}

export default TrackIndexGeneral;


// const trackItem = this.props.indexType === general ? 'TrackThumbnailItem' : 'TrackIndexItem'
