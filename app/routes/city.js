const { getCities, getCity, saveCity, updateCity } = require('../controllers/city');

module.exports = (app) => {
  app.get('/api/v1/city', getCities);

  app.get('/api/v1/city/:id', getCity);
  
  app.post('/api/v1/city', saveCity);

  app.put('/api/v1/city', updateCity);
};
