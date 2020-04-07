const CityRepository = require('../../repository/city');

module.exports = async (req) => {
  await CityRepository.saveCiy(req.body);
};
