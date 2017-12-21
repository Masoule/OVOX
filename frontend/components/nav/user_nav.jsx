import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const UserNav = ({ router, history, currentUser, logout }) => {

    return(
      <div className='small-nav little-nav'>
        <div className='left-nav'>
          <div className='logo logo-small'>
            <img className="logo-img"
              src={window.logo}></img>
          </div>

        <div className='home'>
          <Link
            className='link-hover'
            to={`/stream`}>
              Home
          </Link>
        </div>
      </div>

        <div className='user-actions'>
          <div className='upload'>
            <Link
              className='link-hover'
              to={`/upload`}>
              Upload
            </Link>
          </div>

          <div className='user'>
            <div className='user-thumb'>
              <img src={currentUser.imageUrl}></img>
            </div>

            <Link
              className='username link-hover'
              to={`/${currentUser.id}`}>
              {currentUser.username}
            </Link>
          </div>

          <div className='logout'>
            <button
              className='button logout-btn'
              onClick={logout}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }


export default withRouter(UserNav);
