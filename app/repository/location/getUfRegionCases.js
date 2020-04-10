/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { RegionTypesEnum } = require('../../enums');

const getUfCities = require('./getUfCities');

const Location = mongoose.model('locations');

const getReports = (city) => ({
  population: city.population,
  report: city.report,
});

const sumReports = (total, city) => {
  const cityReport = city.report || {
    confirmed: 0,
    negative: 0,
    suspects: 0,
    deaths: 0,
    recovered: 0,
  };

  return {
    population: total.population + city.population,
    report: {
      confirmed: total.report.confirmed + cityReport.confirmed,
      negative: total.report.negative + cityReport.negative,
      suspects: total.report.suspects + cityReport.suspects,
      deaths: total.report.deaths + cityReport.deaths,
      recovered: total.report.recovered + cityReport.recovered,
    },
  };
};

const getUfRegion = async ({ id, uf }) => {
  const ufRegion = await Location.findOne({
    _id: id,
    $or: [
      { regionType: RegionTypesEnum.MESO_REGION },
      { regionType: RegionTypesEnum.MICRO_REGION },
    ],
    'region.uf': uf,
  }).then((data) => data || {});

  const casesReport = await getUfCities({ uf, regionId: id }).then((cities) =>
    cities.map(getReports).reduce(sumReports, {
      population: 0,
      report: {
        confirmed: 0,
        negative: 0,
        suspects: 0,
        deaths: 0,
        recovered: 0,
      },
    })
  );

  return {
    region: ufRegion.region,
    regionType: ufRegion.regionType,
    name: ufRegion.name,
    _id: ufRegion._id,
    _parent: ufRegion._parent,
    ...casesReport
  };
};

module.exports = getUfRegion;
