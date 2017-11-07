import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../tracks/comment_form_container'

const CommentIndexItem = ({ comment, currentUser }) => {

  const commentFormClass = currentUser ? 'comment-form' : 'no-comment-form'
  return (
    <li className='comment-item'>
        <div className='user-avatar-box'>
          <img className="user-avatar"
            src={comment.image}>
          </img>
        </div>
        <div className='comment-content'>
          <span className='comment-user'>
            <Link className='link-hover'
              to={`/${comment.userId}`}>
              {comment.user}
            </Link>
          </span>
          <span className='comment-user'>
              at
          </span>
          <span className='comment-user'>
            {comment.time}
          </span>
          <span className='comment-body'>
            {comment.body}
          </span>
        </div>
    </li>);
};

export default (CommentIndexItem);
