const {
  byCountry,
  byMacro,
  byUf,
  byCity,
  byRegion,
} = require('../controllers/reports');

module.exports = (app) => {
  app.get('/api/v1/reports/uf/:uf/city/:id', byCity);
  
  /* app.get('/api/v1/reports/country', byCountry);

  app.get('/api/v1/reports/macro/:id', byMacro);

  app.get('/api/v1/reports/uf/:uf', byUf);


  app.get('/api/v1/reports/uf/:uf/region/:region', byRegion); */
};
