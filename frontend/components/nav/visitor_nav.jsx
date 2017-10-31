import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const VisitorNav = ({ router, history, currentUser }) => {

    return(
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
    );
  }


export default withRouter(VisitorNav);
