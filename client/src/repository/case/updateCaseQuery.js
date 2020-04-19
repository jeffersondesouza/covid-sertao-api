import { headersAuth } from 'helpers/http';

export default ({ token, data }) => {
  return {
    method: 'PUT',
    url: `/api/v1/case`,
    headers: headersAuth(token),
    data,
  };
};
