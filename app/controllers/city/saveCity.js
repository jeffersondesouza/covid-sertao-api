const mongoose = require('mongoose');

const Location = mongoose.model('locations');

module.exports = async (req, res) => {
  await Location.find({
    _parent: { $exists: true },
    isCity: true,
  });
};
