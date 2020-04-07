const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const getCity = async (id) => {
  const city = await Location.findById(id);

  return city;
};

module.exports = getCity;
