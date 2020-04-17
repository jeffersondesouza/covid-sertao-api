const jwt = require('jwt-simple');
const keys = require('../../config/keys');

const AuthRepository = require('../../repository/auth');

module.exports = async (req, res) => {
  try {
    const user = await AuthRepository.login(req.body);

    if (!user) {
      return res.send({ status: 401, msg: 'User not found' }).status(401);
    }

    const token = jwt.encode(
      { ...user, expireAt: Date.now() + 300000 },
      keys.jwtSecret
    );

    return res.send({ ...user, token });
  } catch (error) {
    return res.send({ status: 500, msg: 'User not found' }).status(500);
  }
};

/* 
const CASE = {
  cityId: '5e8babf51c9d44000083b976',
  status: 1,
  history: [{ date: Date, status: Number }],
  name: 'Joao das couves',
  bith: '01/01/85',
  gender: 1,
  susId: '123345',
  address: 'Rua do meio, 345 (ed palmas, 201), Centro',
  symptoms: ['Dor de cabeça', '38 de febre', 'dor no corpo', 'tosse seca'],
};
 */
