import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const TrackIndexItem = ({ track, router, history }) => {
  return (
    <li>
      <div className='track-box'>
        <div className='track-thumb-box'>
          <img className="track-thumb"
            src={track.image}></img>
        </div>
        <div className='track-content'>
          <div className='track-header'>

            <div className='play-button'>

            </div>

            <div className='track-info'>
              <div className='track-artist'>
                {track.artist_name}
              </div>

              <div className='track-title'>
                {track.title}
              </div>
            </div>

          </div>

          <div className='track-waveform'>
            waveform
          </div>

          <div className='track-comment-form'>
            commentform
          </div>

          <div className='track-footer'>
            footer
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
