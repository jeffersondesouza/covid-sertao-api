const mongoose = require('mongoose');
const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getCity = async (id) =>
  Location.findOne({
    _id: id,
    regionType: RegionTypesEnum.MACRO_REGION,
  });

module.exports = getCity;
