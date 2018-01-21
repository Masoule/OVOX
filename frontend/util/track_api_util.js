export const fetchTracks = () => (
  $.ajax({
    method: 'get',
    url: '/api/tracks',
  })
);

export const fetchTrack = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/tracks/${id}`,
  })
);


export const createTrack = (formData) => (
  $.ajax({
    method: 'post',
    url: `/api/tracks`,
    processData: false,
    contentType: false,
    data: formData,
  })
);

export const updateTrack = (formData) => (
  $.ajax({
    method: 'patch',
    url: `/api/tracks/${formData.get("track[id]")}`,
    processData: false,
    contentType: false,
    data: formData,
  })
);

export const deleteTrack = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/tracks/${id}`,
  })
);
