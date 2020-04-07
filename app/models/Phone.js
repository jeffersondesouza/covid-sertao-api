const mongoose = require('mongoose');

const { Schema } = mongoose;

const phoneSchema = new Schema({
  _location: { type: Schema.Types.ObjectId, ref: 'Location' },
  cod: String,
  number: String,
  description: String,
});

mongoose.model('phones', phoneSchema);
