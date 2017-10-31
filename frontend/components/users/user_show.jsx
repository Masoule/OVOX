import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserShow extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.userId);
    this.props.fetchUsers();
  }

  header (){
    let user=this.props.user
    let currentUser=this.props.currentUser

    return (
      <div className='track-show-box'>

        <div className='track-show-content'>

          <div className='track-show-header'>

            <div className='play-show-button'>

            </div>

            <div className='track-show-info'>
              <div className='track-show-artist-box'>
                <span className='track-show-artist'>

                </span>
              </div>

              <div className='track-show-title'>
                <Link
                  className=''
                  to={''}>
                  <span className='track-show-title'>
                    {user.username}
                  </span>
                </Link>
              </div>
            </div>

          </div>

        </div>

        <div className='track-show-date'>

        </div>

        <div className='track-show-waveform'>

        </div>

        <div className='track-show-comment-form'>

        </div>

        <div className='track-show-thumb-box'>
          <img className="track-show-thumb"
            src={user.image}></img>
        </div>

      </div>
    )
  }

  comments (){

  }

  render (){
    const content = this.props.user ? this.header() : null
    { content }

    return (
      <div className='track-show'>
        hi!!!!!!
      </div>
    )
  }
}

export default UserShow;
