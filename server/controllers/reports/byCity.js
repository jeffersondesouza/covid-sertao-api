/* eslint-disable no-underscore-dangle */
const LocationRepository = require('../../repository/location');

const EMPTY_REPORT = {
  confirmed: 0,
  suspects: 0,
  negative: 0,
  deaths: 0,
  recovered: 0,
  lastUpdate: 0,
  notInformed: true,
};

module.exports = async (req, res) => {
  try {
    const city = await LocationRepository.getUfCity({
      id: req.params.id,
      uf: req.params.uf,
    });

    const { _id, name, report = EMPTY_REPORT, updateAt, population } = city;

    res.send({
      id: _id,
      name,
      report,
      updateAt: updateAt || new Date(),
      population,
    });
  } catch (error) {
    res.send('Error').status(500);
  }
};
