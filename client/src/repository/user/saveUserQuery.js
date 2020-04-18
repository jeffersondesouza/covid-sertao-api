import { headersAuth } from 'helpers/http';

export default ({ token, data }) => {
  return {
    method: 'POST',
    url: `/api/v1/user`,
    headers: headersAuth(token),
    data,
  };
};
