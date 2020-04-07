const mongoose = require('mongoose');
const Recipient = require('./Recipient');

const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [Recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }, /* <-- (relação) fui criado pelo user */
});

mongoose.model('surveys', surveySchema);
