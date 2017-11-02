import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../nav/header_container'
// import TrackShowItem from './track_show_item';

class TrackShow extends React.Component {

  componentDidMount(){
    this.props.fetchTrack(this.props.trackId);
    this.props.fetchTracks();
  }

  header (){
    let track=this.props.track
    let currentUser=this.props.currentUser

    return (
      <div className='page'>
        <Header
          currentuser={currentUser}
          />
        <div className='main-show'>
          <div className='track-show-header'>

            <div className='track-show-content'>

                <div className='play-show-button'>

                </div>

                <div className='track-show-info'>

                  <div className='track-show-artist-box'>
                    <Link
                      className=''
                      to={`/${track.owner_id}`}>
                      <span className='track-show-artist'>
                        {track.artist_name}
                      </span>
                    </Link>

                  </div>

                  <div className='track-show-title'>
                    <Link
                      className=''
                      to={`/${track.owner_id}/${track.id}`}>
                      <span className=''>
                        {track.title}
                      </span>
                    </Link>
                  </div>
                </div>

            </div>

            <div className='track-show-date'>
              2 days ago
            </div>

            <div className='track-show-waveform'>

            </div>

            <div className='track-show-comment-form'>
              commentform
            </div>

            <div className='track-show-thumb-box'>
              <img className="track-show-thumb"
                src={track.imageUrl}></img>
            </div>

          </div>

          <div className="track-comments">
            <div className='track-owner'>
              owner

            </div>

            <div className='comment-index'>
              comment
            </div>

          </div>
        </div>
    </div>
    )
  }

  comments (){

  }

  render (){
    const content = this.props.track ? this.header() : null

    return (
      <div className='page-show'>
        { content }
      </div>
    )
  }
}

export default TrackShow;

// const content = this.props.track ?
// <TrackShowItem
//   track={this.props.track}
//   currentUser={this.props.currentUser}/> : null

// return (
//   <div className='track-show'>
//     { content }
//   </div>
// )
