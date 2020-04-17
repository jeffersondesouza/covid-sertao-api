export default ({ token }) => {
  return {
    method: 'GET',
    url: 'api/v1/auth/verify',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
