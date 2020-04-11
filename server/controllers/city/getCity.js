const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const city = await LocationRepository.getUfCity({
      id: req.params.id,
      uf: req.params.uf,
    });

    res.send(city);
  } catch (error) {
    res.send('Error').status(500);
  }
};
