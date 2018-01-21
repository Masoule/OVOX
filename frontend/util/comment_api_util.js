export const fetchComments = (trackId) => (
    $.ajax({
      method: 'get',
      url: `/api/tracks/${trackId}/comments`,
    })
  );

export const fetchComment = (commentId) => (
  $.ajax({
    method: 'get',
    url: `/api/tracks/${trackId}/comments/${commentId}`,
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'post',
    url: `/api/tracks/${comment.track_id}/comments`,
    data: {comment} ,
  })
);

export const deleteComment = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/comments/${id}`,
  })
);
