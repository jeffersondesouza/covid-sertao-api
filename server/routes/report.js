const {
  byCountry,
  byUf,
  byCity,
  byRegion,
  updateReport,
} = require('../controllers/reports');

module.exports = (app, authenticate) => {
  app.get('/api/v1/report/country', byCountry);
  app.get('/api/v1/report/uf/:uf/city/:id', byCity);
  app.get('/api/v1/report/uf/:uf/region/:id', byRegion);
  app.get('/api/v1/report/uf/:uf', byUf);

  app.patch('/api/v1/report/update/:id', authenticate(), updateReport);

  /* app.get('/api/v1/reports/macro/:id', byMacro); */
};
