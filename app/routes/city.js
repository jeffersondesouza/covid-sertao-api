const {
  getCities,
  getCity,
  saveCity,
  updateCity,
} = require('../controllers/city');


const {
  getUfs,
  getUf,
  getUfCities
} = require('../controllers/location');



module.exports = (app) => {
  app.route('/api/v1/city').get(getCities).post(saveCity).put(updateCity);

  app.get('/api/v1/location/uf/:uf/city/:id', getCity);
  app.get('/api/v1/location/uf/:uf/city', getUfCities);
  app.get('/api/v1/location/uf/:uf', getUf);
  app.get('/api/v1/location/uf', getUfs);
/*
  app.get('/api/v1/location/uf/:uf', byCity);
  app.get('/api/v1/location/uf/:uf/city', byCity); */
/*   app.get('/api/v1/location/uf/:uf/region', byCity);
  app.get('/api/v1/location/uf/:uf/region/:id', byCity); */
};
