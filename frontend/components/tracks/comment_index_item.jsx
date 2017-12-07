import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../tracks/comment_form_container'

const CommentIndexItem = ({ comment, currentUser }) => {

  return (
    <li className='comment-item'>
        <div className='user-avatar-box'>
          <Link
            className=''
            to={`/${comment.userId}`}>
            <img className="user-avatar"
              src={comment.image}>
            </img>
        </Link>
        </div>
        <div className='comment-content'>
          <span className='comment-info'>
            <Link className='link-hover'
              to={`/${comment.userId}`}>
              {comment.user}
            </Link>
            <span className='comment-time'>
              {comment.time} ago
            </span>
          </span>


          <span className='comment-body'>
            {comment.body}
          </span>
        </div>
    </li>);
};

export default (CommentIndexItem);
