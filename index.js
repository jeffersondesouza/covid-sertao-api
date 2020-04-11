/* Registerinrg the models before app initialization */
require('./server/models/Case');
require('./server/models/Location');
require('./server/models/Phone');
require('./server/models/Report');

const app = require('./server');

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App runing at: http://localhost:${PORT}/`);
});
