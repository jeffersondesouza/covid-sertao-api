/* Registerinrg the models before app initialization */
require('./app/models/Location');
require('./app/models/Phone');
require('./app/models/Report');

const app = require('./app');

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT}/`);
});
