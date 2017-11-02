import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../nav/header_container'
import TrackIndexItem from '../tracks/track_index_item';

class UserShow extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }

  header (){
    let user=this.props.user
    let currentUser=this.props.currentUser
    let tracks=this.props.user.tracks
    let textClass
    if (user.country === '') {
      textClass = 'none';
    }
    // debugger
    return (
      <div className='page'>
        <Header
          currentuser={currentUser}
          user={user}
          />
        <div className='main-show' style={{height:window.innerHeight-94}}>

          <div className='profile-header'>

            <div className='profile-pic-box'>
              <img className="track-show-thumb"
                src={user.imageUrl}></img>
            </div>

          <div className='user-show-info'>
            <div className='user-show-title'>
              {user.username}
              <span className=''>
              </span>
            </div>
            <br></br>
            <div className='user-show-subtitle'>
              <span className=''>
                {user.first_name}
              </span>
            </div>
            <br></br>
            <div className='user-show-subtitle'>
              <span className={textClass}>
                {user.country}
              </span>
            </div>

          </div>
        </div>

          <div className='index-show-box'>
            <ul className='track-index'>
              {
                tracks.map( track => (
                  <TrackIndexItem
                    key={track.id}
                    currentUser={currentUser}
                    track={track} />
                ))
              }
            </ul>
          </div>
        </div>
      </div>

    )
  }

  tracks (){
    let tracks=this.props.user.tracks
    return (
      <div className='track-index-box'>
        <ul className='track-index'>
          {
            tracks.map( track => (
              <TrackIndexItem
                key={track.id}
                currentUser={this.props.currentUser}
                track={track} />
            ))
          }
        </ul>
      </div>
    )
  }

  render (){
    const content = this.props.user === null ? null : this.header()
    const tracks = this.props.user === null ? null : this.tracks()

    return (
      <div className='track-show'>
        { content }
      </div>
    )
  }
}

export default UserShow;

// <div className='track-show-content'>
//
//
//   </div>
