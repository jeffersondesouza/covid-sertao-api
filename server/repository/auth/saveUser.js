/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const User = mongoose.model('users');

const saveUser = async (params) => {
  const existingUser = await User.findOne({
    $and: [
      {
        $or: [{ email: params.email }, { phone: params.phone }],
      },
    ],
  });

  if (existingUser) {
    return null;
  }

  const user = await new User({
    _city: params.city,
    _uf: params.uf,
    email: params.email,
    username: params.username || `${params.cod}${params.phone}`,
    firstname: params.firstname,
    lastname: params.lastname,
    lotation: params.lotation,
    job: params.lotation,
    phone: `${params.cod}${params.phone}`,
    password: `${params.phone}`,
    role: params.role,
  }).save();

  return user;
};

module.exports = saveUser;
