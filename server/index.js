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
  userRoutes,
} = require('./routes');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

cityRoutes(app);
reportsRoutes(app);
authRoutes(app, jwtAuth.authenticate);
caseRoutes(app, jwtAuth.authenticate);
userRoutes(app, jwtAuth.authenticate);

/* CLIENT Routes */
if (envVariables.isProduction()) {
  // Express will serve up production assests
  // like main.js or main.css, they are at client ./build
  app.use(express.static('client/build'));

  // Express will serve up  the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
