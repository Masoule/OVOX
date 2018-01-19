import React from 'react';
import WaveSurfer from 'wavesurfer.js'
import { Link, withRouter } from 'react-router-dom';
import PlayButtonContainer from '../player/play_button_container'
import CommentFormContainer from '../tracks/comment_form_container'

class TrackIndexItem extends React.Component {

  componentDidMount() {
    const wavesurfer = WaveSurfer.create({
      container: `#waveform-${this.props.track.id}`,
      waveColor: '#555',
      progressColor: 'orange',
      cursorWidth: 0,
      barWidth: 2,
      height: 80
    });

    wavesurfer.load(this.props.track.trackUrl);
  }

  render () {
    const { track, router, history, currentUser, deleteTrack, editable } = this.props
    const footerClass = currentUser ? 'user-footer' : 'footer'
    const ownTrack = editable || (currentUser && currentUser.id === track.owner_id) ? true : false

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

            <div className='track-actions'>
              <div className='comment-form'>
                <Link
                  className='comment-icon'
                  to={`/${track.owner_id}/${track.id}`}>
                  <div className='comment-icon'>
                    <img src={window.comment}></img>
                  </div>
                </Link>
                {track.commentIds.length}
              </div>
              { ownTrack ?
                <div className='ownTrack-actions'>
                  <Link
                    className='edit-icon' to={`/${track.owner_id}/${track.id}/edit`}>
                      <img src={window.edit}></img>
                  </Link>

                  <div className='delete-icon'>
                    <img
                      src={window.delete}
                      onClick={() => deleteTrack(track.id)}>
                    </img>
                  </div>

                </div>

                : '' }
              </div>

              <div className={footerClass}>

              </div>

          </div>
        </div>
      </li>);
    }
  }

export default withRouter(TrackIndexItem);
