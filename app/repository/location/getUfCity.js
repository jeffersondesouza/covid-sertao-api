const mongoose = require('mongoose');
const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getUfCity = async ({ id, uf }) =>
  Location.findOne({
    _id: id,
    regionType: RegionTypesEnum.CITY,
    'region.uf': uf,
  });

module.exports = getUfCity;
