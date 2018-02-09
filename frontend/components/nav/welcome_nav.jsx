import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WelcomeNav extends React.Component {

  logo () {
    return (
      <div className='logo-box'>
        <div className='logo'>
          <img className="logo-img"
            src={window.logo}></img>
        </div>
        <Link
          className=''
          to={`/`}>
          <h1 className='logo-text'>
            OVOX
          </h1>
        </Link>
      </div>
    )
  }


  render(){
    return (
      <div className='general-nav'>
        {this.logo()}
        <div className='session-buttons'>

          <div className='button login-btn'>
            <Link
              className='link-btn'
              to={`${this.props.location.pathname}/login`}>
              Sign in
            </Link>
          </div>

          <div className='button signup-btn-welcome'>
            <Link
              className='link-btn'
              to={`${this.props.location.pathname}/signup`}>
              Create account
            </Link>
          </div>

        </div>

        <div className='welcome-marketing'>

          <h2 className='welcome-title'>Connect on OVOX</h2>
          <p className='welcome-text'>Upload your sounds, discover and stream and connect to an expanding mix of music from sound creators around the world</p>

          <div className='button join'>
            <Link
              className='link-join'
              to={`${this.props.location.pathname}/signup`}>
              Sign up for free
            </Link>
          </div>

        </div>

      </div>
    )
  }
}

export default withRouter(WelcomeNav);
