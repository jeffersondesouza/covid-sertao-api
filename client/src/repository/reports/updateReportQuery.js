export default data => {
  return {
    method: 'POST',
    url: `/api/v1/report/${data.locationId}`,
    data,
  };
};
