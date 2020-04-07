const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const getCities = async () =>
  Location.find({
    _parent: { $exists: true },
    isCity: true,
  });

module.exports = getCities;
