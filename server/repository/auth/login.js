/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const User = mongoose.model('users');

const login = async (params) => {
  const { username, password } = params;

  const user = await User.findOne({
    $and: [{ password }, { $or: [{ email: username }, { phone: username }] }],
  }).select('-password');

  return user.toObject();
};

module.exports = login;
