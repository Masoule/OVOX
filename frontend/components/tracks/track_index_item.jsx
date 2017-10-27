import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const TrackIndexItem = ({ track, router, history }) => {
  return (
    <li>
      <Link to={`/tracks/${track.id}`}>
        {track.title}
      </Link>//&nbsp;
    </li>);
};

export default withRouter(TrackIndexItem);








// <Link to={`/tracks/${track.id}/edit`}>
//   Edit
// </Link>
// <button onClick={() => deleteTrack(track.id)}>Delete</button>
