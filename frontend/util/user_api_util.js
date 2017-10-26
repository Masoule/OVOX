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
