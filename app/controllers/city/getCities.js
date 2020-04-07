const CityRepository = require('../../repository/city');

module.exports = async (req, res) => {
  try {
    const cities = await CityRepository.getCities();

    res.send(cities);
  } catch (error) {
    res.send('not found');
  }
};
