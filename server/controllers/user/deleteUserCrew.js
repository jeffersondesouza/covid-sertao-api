/* eslint-disable no-underscore-dangle */
const UserRepository = require('../../repository/user');

module.exports = async (req, res) => {
  const { role } = req.user;

  if (+role === 0 || +role === 1) {
    const users = await UserRepository.deleteUserCrew(req.params.id);
    return res.send({});
  }

  return res.status(401).send('Not Authorized');
};
