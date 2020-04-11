const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const region = await LocationRepository.getUfRegionCases({
      id: req.params.id,
      uf: req.params.uf,
    });

    res.send(region);
  } catch (error) {
    res.send('Error').status(500);
  }
};
