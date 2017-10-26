export const fetchTracks = () => {
  return (
    $.ajax({
      method: 'get',
      url: '/api/users',
    })
  );
};

export const fetchTrack = (id) => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/users/${id}`,
    })
  );
};

export const createTrack = (track) => {
  return (
    $.ajax({
      method: 'post',
      url: `/api/tracks`,
      data: {track}
    })
  );
};
