/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const User = mongoose.model('users');

const loadUsers = async (userId) => {
  const deleteUser = await User.deleteOne({
    _id: userId,
  });

  return deleteUser.deletedCount === 1;
};

module.exports = loadUsers;
