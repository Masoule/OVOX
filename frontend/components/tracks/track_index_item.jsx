import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlayButton from '../player/play_button'
import CommentForm from '../tracks/comment_form'
// import {  receiveCurrentTrack, playing, receivePlayStatus } from '../../actions/player_actions'

const TrackIndexItem = ({ track, router, history, currentUser }) => {
  const footerClass = currentUser ? 'userFooter' : 'footer'
  const commentFormClass = currentUser ? 'comment-form' : 'no-comment-form'
  const editable = (currentUser && currentUser.id === track.owner_id) ? true : false

  return (
    <li className='track-item'>
      <div className='track-box'>
        <div className='track-thumb-box'>
          <img className="track-thumb"
            src={track.imageUrl}></img>
        </div>
        <div className='track-content'>
          <div className='track-header'>

            <div className='play-button'>
              <PlayButton
                track={track}
                />
            </div>

            <div className='track-info'>
              <div className='track-artist'>
                <Link
                  className='track-artist'
                  to={`/${track.owner_id}`}>
                  {track.artist_name}
                </Link>
              </div>

              <div className='track-title'>
                <Link
                  className='track-title'
                  to={`/${track.owner_id}/${track.id}`}>
                  {track.title}
                </Link>
              </div>
            </div>

          </div>

          <div className='track-waveform'>
            waveform
          </div>

          <div className={commentFormClass}>
            <CommentForm
              track={track}/>
          </div>

          <div className={footerClass}>
            { editable ?
              (<Link
                className='edit-button' to={`/${track.owner_id}/${track.id}/edit`}>
                Edit
              </Link>)
              : '' }
          </div>

        </div>
      </div>
    </li>);
};

export default withRouter(TrackIndexItem);






// <Link to={track.image}>
//   {track.title}
// </Link>


// <Link to={`/tracks/${track.id}/edit`}>
//   Edit
// </Link>
// <button onClick={() => deleteTrack(track.id)}>Delete</button>




//
// <Link to={`/tracks/${track.id}`}>
//   {track.title}
// </Link>//&nbsp;
