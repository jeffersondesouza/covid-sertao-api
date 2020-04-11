const mongoose = require('mongoose');

const { Schema } = mongoose;

const caseSchema = new Schema({
  _cityId: { type: Schema.Types.ObjectId, ref: 'Location' },
  ufId: { type: Schema.Types.ObjectId, ref: 'Location' },
  history: [{ date: Date, status: Number, symptoms: [String] }],
  registeredAt: Date,
  name: String,
  bith: String,
  gender: Number,
  susId: String,
  address: String,
});

mongoose.model('cases', caseSchema);
