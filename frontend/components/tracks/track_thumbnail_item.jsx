import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlayButtonContainer from '../player/play_button_container'

class TrackThumbnailItem extends React.Component {

  render () {
    const { track, router, history } = this.props

    return (
      <li className='track-thumb-item'>
        <div className='track-th-box'>

          <div className='track-thumb-box'>
            <Link
              to={`/${track.owner_id}/${track.id}`}>
              <img className="track-thumb"
                src={track.imageUrl}>
              </img>
            </Link>
            <div className='play-thumb-button'>
              <PlayButtonContainer className='play-button'
                track={track}
                />
            </div>
          </div>

          <div className='track-thumb-content'>
              <Link
                className='track-artist'
                to={`/${track.ownerId}`}>
                {track.owner}
              </Link>

              <Link
                className='track-title'
                to={`/${track.owner_id}/${track.id}`}>
                {track.title}
              </Link>
          </div>
        </div>
      </li>);
    }
  }

export default withRouter(TrackThumbnailItem);
