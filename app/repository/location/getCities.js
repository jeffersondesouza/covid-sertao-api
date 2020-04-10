const mongoose = require('mongoose');

const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getCities = async () =>
  Location.find({
    _parent: { $exists: true },
    regionType: RegionTypesEnum.CITY,
  })
    .select('_id phones uf name site email population')
    .then((data) => data || []);
module.exports = getCities;
