const mongoose = require('mongoose');

const app = require('./app');

const Location = mongoose.model('locations');

app.get('/', async (req, res) => {
  /*   const locations = await Location.find();
  console.log('locations:', locations);
 */
  res.send({ id: 1 });
});

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

app.get('/api/v1/city/:id', async (req, res) => {
  const city = await Location.findById(req.params.id);

  res.send(city);
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

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT}/`);
});
