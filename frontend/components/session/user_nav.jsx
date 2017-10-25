import React from 'react';
import { Link } from 'react-router-dom';

class UserNav extends React.Component {


  render (){
    return(
      <div className='user-header'>
        <div className='user-header'>
          <h2>
            welcome {this.props.currentUser.username}
          </h2>
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
