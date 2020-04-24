import { headersAuth } from 'helpers/http';

export default ({ token, data }) => {
  return {
    method: 'PATCH',
    url: `/api/v1/report/update/${data.localeId}`,
    data,
    headers: headersAuth(token),
  };
};
