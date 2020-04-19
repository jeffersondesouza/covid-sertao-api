/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const LocationRepository = require('../location');

const Case = mongoose.model('cases');

const saveCase = async (params) => {
  const {
    city,
    risckFactor,
    symptoms,
    birthday,
    fullname,
    phoneCod,
    street,
    houseNumber,
    docId,
    sus,
    healthyWorker,
    phoneNumber,
    neighborhood,
    covidStatus,
    travelFromFocus,
    focusTravelCity,
    infectedContact,
    infectedContactCity,
    symptomatic,
    hasRiskFactor,
    gender,
  } = params;

  const cityCase = await LocationRepository.updateLocationReport({
    id: city,
    status: covidStatus,
  });

  const newCase = await new Case({
    _city: city,
    _uf: cityCase._parent,
    registeredAt: new Date(),
    history: [{ date: new Date(), status: covidStatus, symptoms }],
    risckFactor,
    symptoms,
    birthday,
    fullname,
    phoneCod,
    street,
    houseNumber,
    docId,
    sus,
    healthyWorker,
    phoneNumber,
    neighborhood,
    covidStatus,
    travelFromFocus,
    focusTravelCity,
    infectedContact,
    infectedContactCity,
    symptomatic,
    hasRiskFactor,
    gender,
  }).save();

  return newCase;
};

module.exports = saveCase;
