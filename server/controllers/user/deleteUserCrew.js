/* eslint-disable no-underscore-dangle */
const UserRepository = require('../../repository/user');

module.exports = async (req, res) => {
  const { role } = req.user;

  if (+role !== 0 && +role !== 1) {
    return res.status(401).send('Not Authorized');
  }

  const deleteSuccess = await UserRepository.deleteUserCrew(req.params.id);
  if (deleteSuccess) {
    return res.send({ msg: 'delete sucess' });
  }

  return res.status(404).send('Not Deleted');
};
