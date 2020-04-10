/* eslint-disable no-underscore-dangle */
const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const city = await LocationRepository.getCity(req.params.id);

    const { _id, name, report, updateAt, population } = city;

    res.send({
      id: _id,
      name,
      report,
      updateAt,
      population,
    });
  } catch (error) {
    res.send('Error').status(500);
  }
};
