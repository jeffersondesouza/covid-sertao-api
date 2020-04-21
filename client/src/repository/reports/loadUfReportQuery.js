import { headersAuth } from 'helpers/http';

export default ({ token, uf }) => {
  return {
    method: 'GET',
    url: `/api/v1/report/uf/${uf}`,
    headers: headersAuth(token),
  };
};
