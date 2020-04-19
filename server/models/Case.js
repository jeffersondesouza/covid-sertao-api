const mongoose = require('mongoose');

const { Schema } = mongoose;

const caseSchema = new Schema({
  _city: { type: Schema.Types.ObjectId, ref: 'Location' },
  _uf: { type: Schema.Types.ObjectId, ref: 'Location' },
  history: [{ date: Date, status: Number, symptoms: [String] }],
  registeredAt: Date,
  risckFactor: [String],
  symptoms: [String],
  birthday: Date,
  fullname: String,
  phoneCod: String,
  street: String,
  houseNumber: String,
  docId: String,
  sus: String,
  healthyWorker: Boolean,
  phoneNumber: String,
  neighborhood: String,
  covidStatus: String,
  travelFromFocus: Boolean,
  focusTravelCity: String,
  infectedContact: Boolean,
  infectedContactCity: String,
  symptomatic: Boolean,
  hasRiskFactor: Boolean,
  gender: String,
});

mongoose.model('cases', caseSchema);
