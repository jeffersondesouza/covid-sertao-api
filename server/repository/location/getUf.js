const mongoose = require('mongoose');
const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getUf = async (id) =>
  Location.findOne({
    _id: id,
    regionType: RegionTypesEnum.UF,
  })
    .select('_id name population')
    .then((data) => data || {});

module.exports = getUf;
