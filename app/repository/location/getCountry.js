const mongoose = require('mongoose');
const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getCity = async () =>
  Location.findOne({
    regionType: RegionTypesEnum.COUNTRY,
  }).then((data) => data || {});

module.exports = getCity;
