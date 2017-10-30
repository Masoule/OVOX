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
    })
  );
};


export const updateTrack = (track) => {
  return (
    $.ajax({
      method: 'patch',
      url: `/api/tracks/${track.id}`,
      data: {track}
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
