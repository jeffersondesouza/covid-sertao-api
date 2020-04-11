const LocationRepository = require('../../repository/location');

module.exports = async (req, res) => {
  try {
    const ufs = await LocationRepository.getUfs();

    res.send(ufs);
  } catch (error) {
    res.send('Error').status(500);
  }
};
