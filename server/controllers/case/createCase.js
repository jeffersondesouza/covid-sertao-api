const CasesRepository = require('../../repository/case');

module.exports = async (req, res) => {
  try {
    const newCase = await CasesRepository.createCase(req.body);

    res.send(newCase);
  } catch (error) {
    res.send('Internal server error').status(500);
  }
};
