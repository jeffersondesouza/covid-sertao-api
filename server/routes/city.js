const {
  getCities,
  getCity,
  saveCity,
  updateCity,
} = require('../controllers/city');

const {
  getUfs,
  getUf,
  getUfCities,
  getUfRegions,
  getUfRegion,
} = require('../controllers/location');

module.exports = (app) => {
  app.route('/api/v1/city').get(getCities).post(saveCity).put(updateCity);

  app.get('/api/v1/location/uf/:uf/city/:id', getCity);
  app.get('/api/v1/location/uf/:uf/city', getUfCities);
  app.get('/api/v1/location/uf/:uf/region/:id', getUfRegion);
  app.get('/api/v1/location/uf/:uf/region', getUfRegions);
  app.get('/api/v1/location/uf/:uf', getUf);
  app.get('/api/v1/location/uf', getUfs);
};
