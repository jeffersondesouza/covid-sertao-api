const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/Location');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());

module.exports = app;
