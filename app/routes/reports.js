const {
  byCountry,
  byUf,
  byCity,
  byRegion,
} = require('../controllers/reports');

module.exports = (app) => {
  app.get('/api/v1/report/country', byCountry);

  app.get('/api/v1/report/uf/:uf', byUf);

  app.get('/api/v1/report/uf/:uf/city/:id', byCity);

  app.get('/api/v1/report/uf/:uf/region/:id', byRegion);

  /* app.get('/api/v1/reports/macro/:id', byMacro); */
};
