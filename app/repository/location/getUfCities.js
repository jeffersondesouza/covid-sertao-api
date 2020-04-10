const mongoose = require('mongoose');
const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getUfCities = async ({ uf, regionId }) => {
  return Location.find({
    regionType: RegionTypesEnum.CITY,
    'region.uf': uf,
    $or: [
      {
        'region.micro': regionId,
      },
      {
        'region.meso': regionId,
      },
    ],
  }).then((data) => data || []);
};

module.exports = getUfCities;
