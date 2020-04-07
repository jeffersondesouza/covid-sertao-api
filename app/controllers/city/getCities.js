const CityRepository = require('../../repository/city');

module.exports = async (req, res) => {
  try {
    const locations = await CityRepository.getCities();

    res.send(locations);
  } catch (error) {
    res.send('not found');
  }
};
