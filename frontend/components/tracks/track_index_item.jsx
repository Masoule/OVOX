import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlayButtonContainer from '../player/play_button_container'
import CommentFormContainer from '../tracks/comment_form_container'

const TrackIndexItem = ({ track, router, history, currentUser, deleteTrack}) => {
  const footerClass = currentUser ? 'user-footer' : 'footer'
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

            <div className='play-index-button'>
              <PlayButtonContainer className='play-button'
                track={track}
                />
            </div>

            <div className='track-detail'>
              <div className='track-info'>
                <Link
                  className='track-artist'
                  to={`/${track.owner_id}`}>
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
                  #{track.genre}
                </div>
              </div>

              { editable ?
                (<Link
                  className='edit-icon' to={`/${track.owner_id}/${track.id}/edit`}>
                  <div className='edit-icon'>
                    <img src={window.edit}></img>
                  </div>
                </Link>)
                : '' }

            </div>

          </div>

          <div className='track-waveform'>

          </div>

            <div className={commentFormClass}>
              <Link
                className='comment-icon'
                to={`/${track.owner_id}/${track.id}`}>
                <div className='comment-icon'>
                  <img src={window.comment}></img>
                </div>
              </Link>
              {track.commentIds.length}
            </div>

            <div className={footerClass}>

            </div>

        </div>
      </div>
    </li>);
};

export default withRouter(TrackIndexItem);


// { editable ?
//   (<div className='edit-icon'>
//     <img
//       src={window.delete1}
//       onClick={() => deletetrack(track.id)}>
//     </img>
//   </div>) : '' }



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
