const mongoose = require('mongoose');
const Phone = require('./Phone');
const Report = require('./Report');

const { Schema } = mongoose;

const locationSchema = new Schema({
  _parent: { type: Schema.Types.ObjectId, ref: 'Location' },
  _microRegion: String,
  _mesoRegion: String,
  isUf: { type: Boolean, default: false },
  isCity: { type: Boolean, default: true },
  name: String,
  site: String,
  email: String,
  logo: String,
  population: Number,
  phones: [Phone],
  report: Object,
});

mongoose.model('locations', locationSchema);
