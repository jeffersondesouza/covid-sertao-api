import { headersAuth } from 'helpers/http';

export default ({ token }) => {
  return {
    method: 'GET',
    url: `/api/v1/case`,
    headers: headersAuth(token),
  };
};
