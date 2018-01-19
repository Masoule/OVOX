import React from 'react';
import WaveSurfer from 'wavesurfer.js'
import { Link, withRouter } from 'react-router-dom';
import Header from '../nav/header_container';
import CommentFormContainer from './comment_form_container';
import CommentIndexItem from './comment_index_item'
import PlayButtonContainer from '../player/play_button_container'

class TrackShow extends React.Component {

  componentDidMount(){
    this.props.fetchTrack(this.props.trackId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.track!==newProps.track) {
      this.wavesurfer = WaveSurfer.create({
         container: this.waveform,
         waveColor: '#555',
         progressColor: 'orange',
         cursorWidth: 0,
         barWidth: 2,
         height: 200
       });
      this.wavesurfer.load(newProps.track.trackUrl);

    }
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
    let track=this.props.track || {};
    let currentUser=this.props.currentUser;

    //if ( track ) {
    return (
      <div className='page-show'>
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

                    <div className='track-show-detail'>
                      <div className='track-show-info'>
                        <Link
                          className='track-show-artist'
                          to={`/${track.owner_id}`}>
                          {track.owner}
                        </Link>

                        <div className='track-show-time'>
                          {track.time} ago
                        </div>

                      </div>

                      <div className='track-show-info'>
                        <Link
                          className='track-show-title'
                          to={`/${track.owner_id}/${track.id}`}>
                          {track.title}
                        </Link>

                        <div className={track.genre ? "show-genre" : "show-no-genre"}>
                          # {track.genre}
                        </div>
                      </div>
                    </div>

                </div>

                <div className='track-show-waveform' id="waveform-show" ref={(waveform) => this.waveform = waveform}></div>

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
      </div>
    )// } else { return null }
  }
}

export default TrackShow;
