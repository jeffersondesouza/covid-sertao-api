import { headersAuth } from 'helpers/http';

export default ({ token, userId }) => {
  return {
    method: 'DELETE',
    url: `/api/v1/user/crew`,
    headers: headersAuth(token),
    data: userId,
  };
};
