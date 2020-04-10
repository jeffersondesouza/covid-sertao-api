/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getUfRegions = async ({ uf }) => {
  const regions = await Location.find({
    $or: [
      { regionType: RegionTypesEnum.MESO_REGION },
      { regionType: RegionTypesEnum.MICRO_REGION },
    ],
    'region.uf': uf,
  })
    .select('id _parent name population')
    .then((data) => data || []);

  return regions;
};

module.exports = getUfRegions;
