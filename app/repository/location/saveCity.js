const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const saveCity = async (params) => {
  const { stateId, name, site, email, population, phones, logo } = params;

  return new Location({
    _parent: stateId,
    name,
    site,
    email,
    population,
    phones,
    logo,
  }).save();
};

module.exports = saveCity;
