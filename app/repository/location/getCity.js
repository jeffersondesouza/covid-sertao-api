const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const getCity = async (id) =>
  Location.findOne({
    _id: id,
    isCity: true,
  });

module.exports = getCity;
