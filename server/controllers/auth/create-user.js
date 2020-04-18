const AuthRepository = require('../../repository/auth');

module.exports = async (req, res) => {
  if (!req.user) {
    return res.status(401).send('Auth Error');
  }

  const newUser = AuthRepository.saveUser(req.body);


  return res.send(req.body);
};
