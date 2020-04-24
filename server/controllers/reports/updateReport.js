/* eslint-disable no-underscore-dangle */
const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const data = { ...req.body };

    delete data.localeId;

    const location = await LocationRepository.updateLocationReport({
      id: req.params.id,
      data,
    });

    res.send(location);
  } catch (error) {
    res.send('Error').status(500);
  }
};
