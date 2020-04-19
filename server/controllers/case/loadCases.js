const CasesRepository = require('../../repository/case');

module.exports = async (req, res) => {
  try {
    const cases = await CasesRepository.loadCases({ city: req.user.city });
    res.send(cases);
  } catch (error) {
    res.send('Internal server error').status(500);
  }
};
