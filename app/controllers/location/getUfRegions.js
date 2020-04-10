const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const regions = await LocationRepository.getUfRegions({
      uf: req.params.uf,
    });

    res.send(regions);
  } catch (error) {
    res.send('Error').status(500);
  }
};
