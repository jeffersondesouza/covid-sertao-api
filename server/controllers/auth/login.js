const jwt = require('jwt-simple');
const keys = require('../../config/keys');

const AuthRepository = require('../../repository/auth');

module.exports = async (req, res) => {
  try {
    const user = await AuthRepository.login(req.body);

    if (!user) {
      return res.status(401).send('User not found');
    }

    const token = jwt.encode(
      { ...user, expireAt: Date.now() + 300000 },
      keys.jwtSecret
    );

    return res.send({ ...user, token });
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
