import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// class UserNav extends React.Component {

const UserNav = ({ router, history, currentUser, logout }) => {

    return(
      <div className='user-nav'>
        <div className='logo-box'>
          <div className='logo'>
            <img className="logo-img"
              src={window.logo}></img>
          </div>
          <h1 className='logo-text'>
            OVOX
          </h1>
        </div>

        <div className='user-actions'>

          <div className='upload'>
            <Link
              className=''
              to={`/upload`}>
              Upload
            </Link>
          </div>

          <div className='user'>
            <div className='user-thumb'>
              <img src={currentUser.user.image}></img>
            </div>

            <Link
              className='username'
              to={`/stream`}>
              {currentUser.user.username}
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
