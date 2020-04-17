/* const jwt = require('jwt-simple');
const keys = require('../../config/keys');

const getHeadersToken = (headers) => {
  if (!headers) {
    return '';
  }
  const { authorization = '' } = headers;

  return authorization.split(/\s/)[1] || '';
};
 */
module.exports = async (req, res) => {
  res.send(req.user);
};
