/* eslint-disable no-underscore-dangle */
const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const location = await LocationRepository.getUf(req.params.uf);

    if (!location) {
      res.send({});
      return;
    }

    const { _id, name, report, updateAt, population } = location;

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
