const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const getCity = async (id) => {
  return Location.findById(id);
};

module.exports = getCity;
