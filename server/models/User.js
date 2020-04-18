const mongoose = require('mongoose');

const { UserRolesEnum } = require('../enums');

const { Schema } = mongoose;

const userSchema = new Schema({
  _city: { type: Schema.Types.ObjectId, ref: 'Location' },
  _uf: { type: Schema.Types.ObjectId, ref: 'Location' },
  registeredAt: { type: Date, default: new Date() },
  username: String,
  firstname: String,
  lastname: String,
  phone: String,
  email: String,
  lotation: String,
  job: String,
  password: String,
  role: {
    type: Number,
    enum: [
      UserRolesEnum.SUPER_USER,
      UserRolesEnum.ADMIN,
      UserRolesEnum.MEMBER,
      UserRolesEnum.SIMPLE,
    ],
  },
});

mongoose.model('users', userSchema);
