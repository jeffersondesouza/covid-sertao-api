const mongoose = require('mongoose');
const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getCity = async (id) =>
  Location.findOne({
    _id: id,
    regionType: RegionTypesEnum.CITY,
  }).then((data) => data || {});

module.exports = getCity;
