const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  _parent: String,
  _microRegion: String,
  _mesoRegion: String,
  isUf: Boolean,
  isCity: Boolean,

  name: String,
  site: String,

  email: String,
  logo: String,
  phones: [String],
  population: Number,

});

mongoose.model('locations', locationSchema);
