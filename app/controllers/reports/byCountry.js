/* eslint-disable no-underscore-dangle */
const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  console.log('req:')
  try {
    const country = await LocationRepository.getCountry(
      '5e9065271c9d440000bce3e6'
      );
      
    const { _id, name, report, updateAt, population } = country;

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
