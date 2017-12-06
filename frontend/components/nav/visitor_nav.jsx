import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const VisitorNav = (props) => {
    return(
    <div className='small-nav little-nav'>
      <div className='logo-box-small'>
        <div className='logo logo-small'>
          <img className="logo-img"
            src={window.logo}></img>
        </div>
        <Link
          className=''
          to={`/`}>
          <h1 className='logo-text'>

          </h1>
        </Link>
      </div>

      <div className='visitor-actions'>
          <div className='login-btn-sm'>
            <Link
              className='a-login'
              to={`${props.location.pathname}/login`}>
              Sign in
            </Link>
          </div>

          <div className='signup-btn-sm'>
            <Link
              className='button signup-btn'
              to={`${props.location.pathname}/signup`}>
              Create account
            </Link>
          </div>

      </div>
    </div>
    );
  }


export default withRouter(VisitorNav);
