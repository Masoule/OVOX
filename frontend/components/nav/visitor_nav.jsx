import React from 'react';
import { Link } from 'react-router-dom';


const VisitorNav = () => {

    return(
    <div className='small-nav'>
      <div className='logo-box'>
        <div className='logo'>
          <img className="logo-img"
            src={window.logo}></img>
        </div>
        <h2 className='logo-text'>
          OVOX
        </h2>
      </div>

      <div className='visitor-actions'>
        <div className='session-buttons'>

          <div className='button login-btn'>
            <Link
              className='link-btn'
              to={`/login`}>
              Sign in
            </Link>
          </div>

          <div className='button signup-btn'>
            <Link
              className='link-btn'
              to={`/signup`}>
              Create account
            </Link>
          </div>

        </div>
      </div>
    </div>
    );
  }


export default VisitorNav;
