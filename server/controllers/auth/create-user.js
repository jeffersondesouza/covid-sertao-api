const AuthRepository = require('../../repository/auth');

module.exports = async (req, res) => {
  const { role } = req.user;

  if (role !== 0 || role !== 1) {
    return res.status(401).send('Not Authorized');
  }

  const newUser = await AuthRepository.saveUser(req.body);

  if (!newUser) {
    return res.status(401).send('Could not create user');
  }

  return res.send(newUser);
};
