export default ({ uf }) => {
  return {
    method: 'GET',
    url: `/api/v1/location/uf/${uf}/city`,
  };
};
