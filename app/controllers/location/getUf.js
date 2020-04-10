const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const uf = await LocationRepository.getUf(req.params.uf);

    res.send(uf);
  } catch (error) {
    res.send('Error').status(500);
  }
};
