const jwt = require('jwt-simple');
const keys = require('../../config/keys');

const CasesRepository = require('../../repository/case');

module.exports = async (req, res) => {
  const USER_FOUND = { id: 1 };

  const token = jwt.encode(USER_FOUND, keys.jwtSecret);

  const decoded = jwt.decode(token, keys.jwtSecret);

  return res.send({ ...USER_FOUND, token, decoded });
};

/*     try {
      const newCase = await CasesRepository.createCase(req.body);
  
      res.send(newCase);
    } catch (error) {
      res.send('Error').status(500);
    } */
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
