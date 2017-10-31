export const fetchTracks = () => {
  return (
    $.ajax({
      method: 'get',
      url: '/api/tracks',
    })
  );
};

export const fetchTrack = (id) => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/tracks/${id}`,
    })
  );
};

export const createTrack = (formData) => {
  // debugger
  return (
    $.ajax({
      method: 'post',
      url: `/api/tracks`,
      processData: false,
      contentType: false,
      data: formData,
      dataType: 'json',
    })
  );
};


export const updateTrack = (formData) => {
  return (
    $.ajax({
      method: 'patch',
      url: `/api/tracks/${formData.get("track[id]")}`,
      processData: false,
      contentType: false,
      data: formData,
      dataType: 'json',
    })
  );
};

export const deleteTrack = (id) => {
  return (
    $.ajax({
      method: 'delete',
      url: `/api/tracks/${id}`,
    })
  );
};
