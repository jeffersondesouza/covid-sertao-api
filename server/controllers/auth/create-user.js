const AuthRepository = require('../../repository/auth');

module.exports = async (req, res) => {
  if (!req.user) {
    return res.status(401).send('Auth Error');
  }

  const newUser = await AuthRepository.saveUser(req.body);

  if (!newUser) {
    return res.status(401).send('Could not create user');
  }

  return res.send(newUser);
};
