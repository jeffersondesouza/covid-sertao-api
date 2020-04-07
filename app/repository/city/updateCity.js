const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const updateCity = async () => {
  const cities = await Location.find({
    _parent: { $exists: true },
    isCity: true,
  });

  return cities;
};

module.exports = updateCity;
