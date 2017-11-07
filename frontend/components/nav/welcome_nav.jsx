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

        <h1 className='logo-text'>
          OVOX
        </h1>
      </div>
    )
  }


  render(){
    return (
      <div className='general-nav'>
        <div className='session-buttons'>

          <div className='button login-btn'>
            <Link
              className='link-btn'
              to={`${this.props.location.pathname}/login`}>
              Sign in
            </Link>
          </div>

          <div className='button signup-btn'>
            <Link
              className='link-btn'
              to={`${this.props.location.pathname}/signup`}>
              Create account
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(WelcomeNav);
