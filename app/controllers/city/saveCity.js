const CityRepository = require('../../repository/city');

module.exports = async (req, res) => {
  try {
    const newCity = await CityRepository.saveCiy(req.body);

    res.send(newCity);
  } catch (error) {
    res.send('Error').status(500);
  }
};
