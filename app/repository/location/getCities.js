const mongoose = require('mongoose');

const { RegionTypesEnum } = require('../../enums');

const Location = mongoose.model('locations');

const getCities = async () =>
  Location.find({
    _parent: { $exists: true },
    regionType: RegionTypesEnum.CITY,
  })
    .then((data) => data || [])
    .then((cities) =>
      cities.map((city) => ({
        id: city.id,
        phones: city.phones,
        uf: city.uf,
        name: city.name,
        site: city.site,
        email: city.email,
        population: city.population,
      }))
    );

module.exports = getCities;
