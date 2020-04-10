/* eslint-disable no-underscore-dangle */
const LocationRepository = require('../../repository/location');

const emptyReports = {
  confirmed: 0,
  suspects: 0,
  negative: 0,
  deaths: 0,
  recovered: 0,
};

module.exports = async (req, res) => {
  try {
    const city = await LocationRepository.getUfCity({
      id: req.params.id,
      uf: req.params.uf,
    });

    const { _id, name, report = emptyReports, updateAt, population } = city;

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
