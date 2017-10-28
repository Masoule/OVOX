import React from 'react';
import { Link } from 'react-router-dom';

class UserNav extends React.Component {


  render (){
    const currentUser = this.props.currentUser.user;
    return(
      <div className='user-actions'>

        <div className='upload'>
          <Link
            className=''
            to={`/`}>
            Upload
          </Link>
        </div>

        <div className='user'>
          <div className='user-thumb'>
            <img src={currentUser.image}></img>
          </div>

          <Link
            className='username'
            to={`/`}>
            {currentUser.username}
          </Link>
        </div>

        <div className='logout'>
          <button
            className='button logout-btn'
            onClick={this.props.logout}>
            Sign out
          </button>
        </div>
      </div>
    );
  }
}

export default UserNav;
