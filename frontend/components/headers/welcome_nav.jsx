import React from 'react';
import { Link } from 'react-router-dom';

class WelcomeNav extends React.Component {

  render(){
    return(
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
    );
  }
}

export default WelcomeNav;
