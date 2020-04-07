const mongoose = require('mongoose');

const Location = mongoose.model('locations');

module.exports = (app) => {
  app.get('/api/v1/city', async (req, res) => {
    try {
      const locations = await Location.find({
        _parent: { $exists: true },
        isCity: true,
      });

      res.send(locations);
    } catch (error) {
      res.send('not found');
    }
  });

  app.get('/api/v1/city/:id', async (req, res) => {
    const city = await Location.findById(req.params.id);

    res.send(city);
  });

  app.post('/api/v1/city', async (req, res) => {
    try {
      const { stateId, name, site, email, population, phones } = req.body;

      const newCity = await new Location({
        _parent: stateId,
        name,
        site,
        email,
        population,
        phones,
        logo: '',
      }).save();

      res.send(newCity);
    } catch (error) {
      res.send('Error').status(500);
    }
  });

  app.put('/api/v1/city', async (req, res) => {
    try {
      const { id, population } = req.body;

      const city = await Location.updateOne(
        { _id: id },
        {
          population,
        }
      ).exec();

      res.send(city);
    } catch (error) {
      res.send('Error').status(500);
    }
  });
};
