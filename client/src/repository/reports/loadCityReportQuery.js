import { headersAuth } from 'helpers/http';

export default ({ token, uf, city }) => {
  return {
    method: 'GET',
    url: `/api/v1/report/uf/${uf}/city/${city}`,

    headers: headersAuth(token),
  };
};
