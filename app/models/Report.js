const mongoose = require('mongoose');

const { Schema } = mongoose;

const reportSchema = new Schema({
  _location: { type: Schema.Types.ObjectId, ref: 'Location' },
  confirmed: { type: Number, default: 0 },
  suspects: { type: Number, default: 0 },
  negative: { type: Number, default: 0 },
  deaths: { type: Number, default: 0 },
  recovered: { type: Number, default: 0 },
  lastUpdate: { type: Number, default: 0 },
});

mongoose.model('reports', reportSchema);
