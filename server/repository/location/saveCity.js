const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const saveCity = async (params) => {
  const {
    stateId,
    name,
    site,
    email,
    population,
    phones,
    logo,
    region,
  } = params;

  const location = await new Location({
    _parent: stateId,
    name,
    site,
    email,
    population,
    phones,
    logo,
    regionType: '6',
    report: {
      confirmed: 0,
      negative: 0,
      suspects: 0,
      deaths: 0,
      recovered: 0,
    },
    region: {
      ...region,
      uf: stateId,
      country: '5e90d1d01c9d4400000e879f',
    },
  });

  return location.save()
};

module.exports = saveCity;
