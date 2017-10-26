// session requests

export const signup = user => {
  return (
    $.ajax({
      method: 'post',
      url: '/api/users',
      data: {user}
    })
  );
};

export const login = user => {
  return (
    $.ajax({
      method: 'post',
      url: '/api/session',
      data: {user}
    })
  );
};

export const logout = () => {
  return (
    $.ajax({
      method: 'delete',
      url: '/api/session',
    })
  );
};

// user requests
export const fetchUsers = () => {
  return (
    $.ajax({
      method: 'get',
      url: '/api/users',
    })
  );
};

export const fetchUser = (id) => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/users/${id}`,
    })
  );
};

//track requests

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
