/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const LocationRepository = require('../location');

const Case = mongoose.model('cases');

const saveCase = async (params) => {
  const {
    cityId,
    status,
    name,
    bith,
    gender,
    susId,
    address,
    symptoms,
  } = params;

  const city = await LocationRepository.updateReport({ id: cityId, status });

  const newCase = await new Case({
    _cityId: cityId,
    ufId: city._parent,
    registeredAt: new Date(),
    history: [{ date: new Date(), status, symptoms }],
    name,
    bith,
    gender,
    susId,
    address,
  }).save();

  return newCase;
};

module.exports = saveCase;
