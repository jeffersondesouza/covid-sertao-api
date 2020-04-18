/* eslint-disable no-underscore-dangle */
const UserRepository = require('../../repository/user');

module.exports = async (req, res) => {
  const { _city, role } = req.user;

  if (role !== 1) {
    return res.status(401).send('Not Authorized');
  }

  const users = await UserRepository.loadUsersCrew(_city, req.user._id);
  return res.send(users || []);
};
