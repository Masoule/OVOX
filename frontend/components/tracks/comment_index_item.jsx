import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../tracks/comment_form_container'
// import {  receiveCurrentTrack, playing, receivePlayStatus } from '../../actions/player_actions'

const CommentIndexItem = ({ comment, currentUser }) => {

  const commentFormClass = currentUser ? 'comment-form' : 'no-comment-form'
  // const deletable = (currentUser && currentUser.id === comment.user.id) ? true : false

  return (
    <li className='comment-item'>
        <div className='user-avatar-box'>
          <img className="user-avatar"
            src={comment.image}>
          </img>
        </div>
        <div className='comment-content'>
          <span className='comment-user'>
            {comment.user.username} at {comment.time}
          </span>
          <span className='comment-body'>
            {comment.body}
          </span>
        </div>
    </li>);
};

export default (CommentIndexItem);
