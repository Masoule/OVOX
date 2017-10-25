import React from 'react';
import { Link } from 'react-router-dom';

class SessionButtons extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return(
      <div className='header'>

        <div className='logo'>
          <h1>OVOX</h1>
        </div>

        <div className='buttons'>
          {
            (this.props.currentUser) ?  (
              <div>
                <h2>
                  welcome {this.props.currentUser.username}
                </h2>
                <button
                  className='button logout-btn'
                  onClick={this.props.logout}>
                  Logout
                </button>
              </div>)
              :(
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
            )
          }
        </div>
      </div>
    );
  }



}


export default SessionButtons;
