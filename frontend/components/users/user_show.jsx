import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../nav/header_container'
import TrackIndexItem from '../tracks/track_index_item';

class UserShow extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }

  header (){
    const user=this.props.user
    const currentUser=this.props.currentUser
    const tracks= user.tracks
    const country = user.country
    const editable = (currentUser && user.id === currentUser.id) ? true : false

    return (
      <div className='page'>
        <Header
          currentuser={currentUser}
          user={user}
          />
        <div className='main-show'>

          <div className='profile-header'>

            <div className='profile-pic-box'>
              <img className="track-show-thumb"
                src={user.imageUrl}></img>
            </div>

          <div className='user-show-info'>
            <div className='user-show-title'>
              {this.props.user.username}
            </div>
            <br></br>
            <div className='user-show-subtitle'>
              {this.props.user.first_name}
            </div>
            <br></br>
            { country ? (
              <div className='user-show-subtitle'>
                { country }
              </div> ) : ''
            }
          </div>
        </div>

          <div className='index-show-box'>
            <ul className='track-index'>
              {
                tracks.map( track => (
                  <TrackIndexItem
                    key={track.track.id}
                    currentUser={currentUser}
                    deleteTrack={this.props.deleteTrack}
                    track={track.track}
                    editable={editable} />
                ))
              }
            </ul>
          </div>
        </div>
      </div>

    )
  }

  render (){
    const content = this.props.user === null ? null : this.header()
    return (
      <div className='track-show'>
        { content }
      </div>
    )
  }
}

export default UserShow;
