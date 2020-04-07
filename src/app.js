const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/Location');
require('./models/Phone');
require('./models/Recipient');
require('./models/Report');
require('./models/Survey');
require('./models/User');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());

module.exports = app;
