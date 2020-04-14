/* eslint-disable no-underscore-dangle */
const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const location = await LocationRepository.getUf(req.params.uf);
    console.log('location:', location)

    if (!location) {
      res.send({});
      return;
    }

    const { _id, name, report, population } = location;

    res.send({
      id: _id,
      name,
      report,
      updateAt: new Date(),
      population,
    });
  } catch (error) {
    res.send('Error').status(500);
  }
};
