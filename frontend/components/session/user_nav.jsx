import React from 'react';
import { Link } from 'react-router-dom';

class UserNav extends React.Component {


  render (){
    return(
      <div className='user-actions'>

        <div className='upload'>
          <Link
            className=''
            to={`/`}>
            Upload
          </Link>
        </div>

        <div className='user-thumb'>
          <Link
            className='link'
            to={`/`}>
            {this.props.currentUser.username}
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
