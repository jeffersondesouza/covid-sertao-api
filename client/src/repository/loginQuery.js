export default data => {
  return {
    method: 'POST',
    url: '/api/v1/auth/login',
    data,
  };
};
