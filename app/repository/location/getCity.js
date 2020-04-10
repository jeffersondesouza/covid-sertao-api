const mongoose = require('mongoose');
const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getCity = async (id) =>
  Location.findOne({
    _id: id,
    regionType: RegionTypesEnum.CITY,
  })
    .then((data) => data || {})
    .then((city) => {
      return {
        id: city.id,
        phones: city.phones,
        uf: city.uf,
        name: city.name,
        site: city.site,
        email: city.email,
        population: city.population,
      };
    });

module.exports = getCity;
