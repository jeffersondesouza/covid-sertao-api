const mongoose = require('mongoose');

const Location = mongoose.model('locations');

module.exports = async (req, res) => {
  const city = await Location.findById(req.params.id);

  res.send(city);
};
