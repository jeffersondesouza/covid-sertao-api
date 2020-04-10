const mongoose = require('mongoose');

const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getCities = async () =>
  Location.find({
    _parent: { $exists: true },
    regionType: RegionTypesEnum.CITY,
  });

module.exports = getCities;
