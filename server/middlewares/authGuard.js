module.exports = (authenticate) => (req, res) => {
  return authenticate(req, res);
};
