const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const getCity = async (id) => Location.findById(id);

module.exports = getCity;
