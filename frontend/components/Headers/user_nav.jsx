import React from 'react';
import { Link } from 'react-router-dom';

class UserNav extends React.Component {

  signout () {
    this.props.logout()
    .then(() => this.props.history.push('/'));
  }

  render (){
    const currentUser = this.props.currentUser.user;
    return(
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
            <img src={currentUser.image}></img>
          </div>

          <Link
            className='username'
            to={`/stream`}>
            {currentUser.username}
          </Link>
        </div>

        <div className='logout'>
          <button
            className='button logout-btn'
            onClick={this.signout()}>
            Sign out
          </button>
        </div>
      </div>
    );
  }
}

export default UserNav;
