import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../nav/header_container';
import CommentFormContainer from './comment_form_container';
import CommentIndexItem from './comment_index_item'
import PlayButtonContainer from '../player/play_button_container'

class TrackShow extends React.Component {

  componentDidMount(){
    this.props.fetchTrack(this.props.trackId);
  }

  header (){
    let track=this.props.track
    let currentUser=this.props.currentUser
    return (
      <div className='page'>
        <Header
          currentuser={currentUser}
          />
        <div className='main-show'>
          <div className='track-show-header'>

            <div className='track-show-content'>

                <div className='play-show-button'>
                    <PlayButtonContainer
                      className='play-show-button'
                      track={track}
                      />
                </div>

                <div className='track-show-info'>

                  <div className='track-show-artist-box'>
                    <Link
                      className=''
                      to={`/${track.owner_id}`}>
                      <span className='track-show-artist'>
                        {track.owner}
                      </span>
                    </Link>

                  </div>

                  <div className='track-show-title'>
                    <Link
                      className=''
                      to={`/${track.owner_id}/${track.id}`}>
                      <span className=''>
                        {track.title}
                      </span>
                    </Link>
                  </div>
                </div>

            </div>

            <div className='track-show-date'>

            </div>

            <div className='track-show-waveform'>

            </div>


            <div className='track-show-thumb-box'>
              <img className="track-show-thumb"
                src={track.imageUrl}></img>
            </div>

          </div>

          <div className="track-comments">

            <div className='track-show-comment-form'>
              <CommentFormContainer
                trackId={this.props.trackId}/>
            </div>

            <div className='comment-index'>

              <div className='track-owner'>
                <div className='artist-avatar-box'>
                  <img className="artist-avatar"
                    src={track.ownerImage}></img>
                </div>
                <div>
                  <Link
                    to={`/${track.owner_id}`}>
                    {track.owner}
                  </Link>
                </div>
              </div>
              <div className='comments-outer'>
                <div className='comments-title'>
                  {this.props.comments.length} Comments
                </div>
                {this.comments()}
              </div>

            </div>

          </div>
        </div>
    </div>
    )
  }

  comments (){
    let track = this.props.track
    if (this.props.comments) {
      return (
          <ul className='comments'>
            {
              this.props.comments.map( comment => (
                comment ?
                  <CommentIndexItem
                    key={comment.id}
                    comment={ comment } /> : ""
              ))
            }
          </ul>
      )
    }
  }

  render (){
    const content = this.props.track ? this.header() : null
    return (
      <div className='page-show'>
        { content }
      </div>
    )
  }
}

export default TrackShow;
