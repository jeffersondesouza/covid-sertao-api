const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const city = await LocationRepository.getCity(req.params.id);

    res.send(city);
  } catch (error) {
    res.send('Error').status(500);
  }
};
