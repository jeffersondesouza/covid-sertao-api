const CityRepository = require('../../repository/city');

module.exports = async (req, res) => {
  try {
    const city = await CityRepository.updateCity(req.body);

    res.send(city);
  } catch (error) {
    res.send('Error').status(500);
  }
};
