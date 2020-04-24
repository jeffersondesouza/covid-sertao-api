export default data => {
  return {
    method: 'PATCH',
    url: `/api/v1/report/${data.locationId}`,
    data,
  };
};
