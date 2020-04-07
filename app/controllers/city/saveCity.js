const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const newCity = await LocationRepository.saveCiy(req.body);

    res.send(newCity);
  } catch (error) {
    res.send('Error').status(500);
  }
};
