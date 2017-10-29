import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const TrackShowItem = ({ track, router, history, currentUser }) => {
  return (
    <li>
      <div className='track-show-box'>

        <div className='track-show-content'>

          <div className='track-show-header'>

            <div className='play-show-button'>

            </div>

            <div className='track-show-info'>
              <div className='track-show-artist-box'>
                <span className='track-show-artist'>
                  {track.artist_name}
                </span>
              </div>

              <div className='track-show-title'>
                  <Link
                    className=''
                    to={`/${track.owner_id}/${track.id}`}>
                    <span className='track-show-title'>
                      {track.title}
                    </span>
                  </Link>
              </div>
            </div>

          </div>

        </div>

        <div className='track-show-date'>
          2 days ago
        </div>

        <div className='track-show-waveform'>
          waveform
        </div>

        <div className='track-show-comment-form'>
          commentform
        </div>

        <div className='track-show-thumb-box'>
          <img className="track-show-thumb"
            src={track.image}></img>
        </div>

      </div>
    </li>);
};

export default withRouter(TrackShowItem);






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
