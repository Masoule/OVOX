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

export const createComment = (formData) => {
  return (
    $.ajax({
      method: 'post',
      url: `/api/tracks/${trackId}/comments`,
      processData: false,
      contentType: false,
      data: formData,
      dataType: 'json',
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
