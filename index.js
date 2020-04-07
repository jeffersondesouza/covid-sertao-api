const mongoose = require('mongoose');

const app = require('./src/app');

const Location = mongoose.model('locations');

app.get('/', async (req, res) => {
  /*   const locations = await Location.find();
  console.log('locations:', locations);
 */
  res.send({ id: 1 });
});


app.get('/api/v1/locations', async (req, res) => {
  try {
    const locations = await Location.find();

    res.send(locations);
  } catch (error) {
    res.send('not found');
  }
});

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT}/`);
});
