/* Registerinrg the models before app initialization */
require('./app/models/Location');
require('./app/models/Phone');
require('./app/models/Recipient');
require('./app/models/Report');
require('./app/models/Survey');
require('./app/models/User');

const app = require('./app');

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT}/`);
});
