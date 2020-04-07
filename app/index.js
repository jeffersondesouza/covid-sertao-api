const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const keys = require('./config/keys');
const envVariables = require('./services/envVariables');

const { cityRoutes, caseRoutes } = require('./routes');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());

cityRoutes(app);
caseRoutes(app);

/* CLIENT Routes */
if (envVariables.isProduction()) {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
