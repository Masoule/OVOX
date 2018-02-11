import React from 'react';
import TrackThumbnailItem from './track_thumbnail_item';
import WelcomeNav from '../nav/welcome_nav'

class TrackIndexGeneral extends React.Component {

  componentDidMount(){
    this.props.fetchTracks();
  }

  render (){
    return (
      <div>
        <WelcomeNav />

        <div className='track-index-box'>
          <ul className='track-thumb-index'>
            {
              this.props.tracks.map( track => (
                <TrackThumbnailItem
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
