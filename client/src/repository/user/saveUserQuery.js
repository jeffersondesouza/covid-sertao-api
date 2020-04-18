import { headersAuth } from 'helpers/http';

export default ({ token, data }) => {
  return {
    method: 'POST',
    url: `/api/v1/auth/create`,
    headers: headersAuth(token),
    data,
  };
};
