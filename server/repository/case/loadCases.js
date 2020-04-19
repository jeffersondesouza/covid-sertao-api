/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const Case = mongoose.model('cases');

const loadCases = async (params) => {
  console.log('params:', params)
  const { city } = params;

  const cases = await Case.find({
    _city: city,
  });

  return cases;
};

module.exports = loadCases;
