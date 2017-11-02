export const fetchComments = (trackId) => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/tracks/${trackId}/comments`,
    })
  );
};

export const fetchComment = (commentId) => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/tracks/${trackId}/comments/${commentId}`,
    })
  );
};

export const createComment = comment => {
  return (
    $.ajax({
      method: 'post',
      url: `/api/tracks/${comment.track_id}/comments`,
      data: {comment} ,
    })
  );
};

export const deleteComment = (id) => {
  return (
    $.ajax({
      method: 'delete',
      url: `/api/comments/${id}`,
    })
  );
};
