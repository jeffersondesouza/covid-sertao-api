const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const cities = await LocationRepository.getCities(req.params.uf);

    res.send(cities);
  } catch (error) {
    res.send('not found');
  }
};
