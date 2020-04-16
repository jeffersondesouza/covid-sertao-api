const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const keys = require('./config/keys');
const envVariables = require('./services/envVariables');
const jwtAuth = require('./services/passport/jwt-strategy')();

const app = express();

app.use(bodyParser.json());
app.use(jwtAuth.initialize());

const {
  authRoutes,
  cityRoutes,
  caseRoutes,
  reportsRoutes,
} = require('./routes');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

authRoutes(app, jwtAuth.authenticate);
cityRoutes(app);
caseRoutes(app);
reportsRoutes(app);

/* CLIENT Routes */
if (envVariables.isProduction()) {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
