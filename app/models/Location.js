const mongoose = require('mongoose');

const { RegionTypesEnum } = require('../enums');
const Phone = require('./Phone');

const { Schema } = mongoose;

const locationSchema = new Schema({
  _parent: { type: Schema.Types.ObjectId, ref: 'Location' },
  microRegion: String,
  mesoRegion: String,
  name: String,
  site: String,
  email: String,
  logo: String,
  population: Number,
  phones: [Phone],
  report: Object,
  updateAt: Date,
  regionType: {
    type: String,
    default: RegionTypesEnum.CITY,
    enum: [
      RegionTypesEnum.COUNTRY,
      RegionTypesEnum.MACRO_REGION,
      RegionTypesEnum.UF,
      RegionTypesEnum.MESO_REGION,
      RegionTypesEnum.MICRO_REGION,
      RegionTypesEnum.CITY,
    ],
  },
});

mongoose.model('locations', locationSchema);
