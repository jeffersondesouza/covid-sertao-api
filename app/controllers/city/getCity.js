const CityRepository = require('../../repository/city');

module.exports = async (req, res) => {
  const city = await CityRepository.getCity(req.params.id);

  res.send(city);
};
