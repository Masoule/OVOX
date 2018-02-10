import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlayButtonContainer from '../player/play_button_container'

class TrackThumbnailItem extends React.Component {

  render () {
    const { track, router, history } = this.props

    return (
      <li className='track-item'>
        <div className='track-box'>

          <div className='track-thumb-box'>
            <Link
              to={`/${track.owner_id}/${track.id}`}>
              <img className="track-thumb"
                src={track.imageUrl}>
              </img>
            </Link>
          </div>

          <div className='track-content'>

            <div className='track-header'>

              <div className='play-index-button'>
                <PlayButtonContainer className='play-button'
                  track={track}
                  />
              </div>

              <div className='track-detail'>
                <div className='track-info'>
                  <Link
                    className='track-artist'
                    to={`/${track.ownerId}`}>
                    {track.owner}
                  </Link>

                  <div className='track-time'>
                    {track.time}
                  </div>
                </div>

                <div className='track-info'>
                  <Link
                    className='track-title'
                    to={`/${track.owner_id}/${track.id}`}>
                    {track.title}
                  </Link>

                  <div className={track.genre ? "genre" : "no-genre"}>
                    # {track.genre}
                  </div>
                </div>

              </div>

            </div>

            <div className='track-waveform' id={`waveform-${track.id}`}></div>

          </div>
        </div>
      </li>);
    }
  }

export default withRouter(TrackThumbnailItem);
