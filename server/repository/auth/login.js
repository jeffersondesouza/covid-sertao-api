/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const LocationRepository = require('../location');

const User = mongoose.model('users');

const login = async (params) => {
  const { username, password } = params;

  const user = await User.findOne({
    $and: [{ password }, { $or: [{ email: username }, { phone: username }] }],
  }).select('-password');

  if (!user) {
    return null;
  }

  if (!user._city || !user._uf) {
    return user.toObject();
  }

  const uf = await LocationRepository.getUf(user._uf);
  const city = await LocationRepository.getCity(user._city);

  return { ...user.toObject(), uf, city };
};

module.exports = login;
