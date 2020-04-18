/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const User = mongoose.model('users');

const loadUsers = async (userId) => {
  const users = await User.findOne({
    _id: userId,
  });

  return users;
};

module.exports = loadUsers;
